import { PostParams } from "../types";
import { fetchPage, deleteRequest, addRequest , updatePostRequest} from "./fetchUtils";

type Cache = {
  scope: number[];
  pages: {
    [key: number]: PostParams[];
  };
  "x-total-count": string;
  key: number;
  pendingRequests: {
    [key: number]: Promise<void>;
  };
};

type Response = {
  data: PostParams[];
  headers: {
    "x-total-count": string;
  };
};

const cache: Cache = {
  scope: [],
  pages: {},
  "x-total-count": "-1",
  key: 1,
  pendingRequests: {},
};

const getKey = async (func?: string) => {
  while (cache.key !== 1) {
    console.log("waiting for key: ", func);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  cache.key = 0;
};

const releaseKey = () => {
  cache.key = 1;
};

const read = async (pageNumber: number): Promise<Response> => {
  const posts = cache.pages[pageNumber] || [];
  const res = {
    data: posts,
    headers: { "x-total-count": cache["x-total-count"] },
  };
  return res;
};

const fetchAndCachePage = async (pageNumber: number) => {
  if (!(pageNumber in cache.pendingRequests)) {
    cache.pendingRequests[pageNumber] = (async () => {
      const res = await fetchPage(pageNumber);

      // Update the cache
      cachePage(pageNumber, res.data);
      updateTotalCount(res.headers["x-total-count"]);

      // Remove the pending request once it is fulfilled
      delete cache.pendingRequests[pageNumber];
    })();
  }

  // Wait for the pending request to complete
  await cache.pendingRequests[pageNumber];
};

const updatePages = async (scope: number[]) => {
  cache.scope = scope;

  // Clear cache
  const pagesToClear = Object.keys(cache.pages).filter(
    (pageNumber) => !scope.includes(+pageNumber)
  );
  await deletePages(pagesToClear.map((pageNumber) => +pageNumber));

  // Update cache
  const pagesToFetch = scope.filter((pageNumber) => !cache.pages[pageNumber]);
  await Promise.all(
    pagesToFetch.map((pageNumber) => fetchAndCachePage(pageNumber))
  );

  console.log("cache", cache);
};

const updateTotalCount = (total: string) => {
  cache["x-total-count"] = total;
};

const cachePage = (pageNumber: number, posts: PostParams[]) => {
  cache.pages[pageNumber] = posts;
};

const firstFetch = async () => {
  if (cache["x-total-count"] !== "-1") {
    return;
  }
  await updatePages([1, 2, 3, 4, 5]);
};

const getPage = async (
  pageNumber: number,
  scope: number[]
): Promise<Response> => {
  if (cache["x-total-count"] === "-1") {
    await firstFetch();
  }

  // Return the cached page immediately if available
  if (pageNumber in cache.pages) {
    const res = await read(pageNumber);
    console.log("Returning cached page immediately:", pageNumber);

    // Update the scope and fetch missing pages in the background
    setTimeout(async () => {
      await updatePages(scope);
    }, 0);

    return res;
  } else {
    console.log("Page not in cache:", pageNumber);

    // Update the scope and fetch the page and missing pages
    await updatePages(scope);

    // Return the fetched page
    const res = await read(pageNumber);
    return res;
  }
};

const deletePages = async (pageNumbers: number[]) => {
  await getKey();
  pageNumbers.forEach((pageNumber) => {
    if (cache.pages[pageNumber]) {
      delete cache.pages[pageNumber];
    }
  });
  releaseKey();
};
const deletePost = async (ith: number, currPage: number) => {
  await getKey();
  const res = await deleteRequest(ith);
  if (res.status === 204) {
    // Calculate the new total count
    const newTotalCount = +cache["x-total-count"] - 1;
    cache["x-total-count"] = newTotalCount.toString();

    const lastPage = Math.ceil(newTotalCount / 10);

    // Check if we need to remove the last page from the cache
    if (newTotalCount % 10 === 0 && currPage > lastPage) {
      delete cache.pages[currPage];
      currPage = lastPage;
    }

    // Fetch the current page
    await fetchAndCachePage(currPage);

    // Refetch subsequent pages in the background
    const pagesToRefetch = [];
    for (let i = currPage + 1; i <= lastPage; i++) {
      if (i in cache.pages) {
        pagesToRefetch.push(fetchAndCachePage(i));
      }
    }

    await Promise.all(pagesToRefetch);
  }
  releaseKey();
  return res;
};

const addPost = async (post: PostParams) => {
  await getKey();
  const res = await addRequest(post);
  if (res.status === 201) {
    const lastPage = Math.ceil(+cache["x-total-count"] / 10);
    cache["x-total-count"] = (+cache["x-total-count"] + 1).toString();
    await fetchAndCachePage(lastPage);
  }
  releaseKey();
  return res;
};

const updatePost = async (ith: number, post: PostParams, pageNumber: number) => {
    await getKey();
    const res = await updatePostRequest(ith, post);
    // if (res.status === 200) {
    //   // Fetch the current page to ensure the cache is updated correctly
    //   await fetchAndCachePage(pageNumber);
    // }
    releaseKey();
    return res;
  };

export { getPage, deletePost, addPost , updatePost};
