import { PostParams } from "../types";
import { fetchPage, deleteRequest, addRequest } from "./fetchUtils";

type Cache = {
  scope: number[];
  pages: {
    [key: number]: PostParams[];
  };
  "x-total-count": string;
  key: number;
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
};

const getKey = async () => {
  while (cache.key !== 1) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  console.log("getKey");
  cache.key = 0;
};

const releaseKey = () => {
  console.log("releaseKey");
  cache.key = 1;
};

const fetchNCache = async (pageNumber: number) => {
  const res = await fetchPage(pageNumber);
  if (res.data.length === 0) {
    return { data: [], headers: { "x-total-count": cache["x-total-count"] } };
  }
  +res.headers["x-total-count"] &&
    updateTotalCount(res.headers["x-total-count"]);
  cachePage(pageNumber, res.data);
  return {
    data: res.data,
    headers: { "x-total-count": res.headers["x-total-count"] },
  };
};
const updateScope = async (scope: number[]) => {
  await getKey();
  cache.scope = scope;
  // clear cache
  Object.keys(cache.pages).forEach((pageNumber) => {
    if (!scope.includes(+pageNumber)) {
      console.log("deleting page from cache", pageNumber);
      delete cache.pages[+pageNumber];
    }
  });
  // update cache
  scope.forEach(async (pageNumber) => {
    if (cache.pages[pageNumber]) {
      return;
    }
    console.log("fetching page", pageNumber);
    fetchNCache(pageNumber);
  });
  releaseKey();
};

const updateCacheFromPageUnsafe = async (pageNumber: number) => {
  cache.scope.forEach(async (pageInScope) => {
    if (pageInScope < pageNumber) {
      return;
    }
    console.log("updating page", pageInScope);
    await fetchNCache(pageInScope);
  });
};

const updateTotalCount = (total: string) => {
  cache["x-total-count"] = total;
};

const cachePage = (pageNumber: number, posts: PostParams[]) => {
  cache.pages[pageNumber] = posts;
};

const getPageAndUpdateUnsafe = async (
  pageNumber: number,
  scope: number[]
): Promise<Response> => {
  if (cache.pages[pageNumber]) {
    return {
      data: cache.pages[pageNumber],
      headers: { "x-total-count": cache["x-total-count"] },
    };
  }
  console.log("fetching page getPageAndUpdate", pageNumber);
  const res = await fetchNCache(pageNumber);
  updateScope(scope); // releases the key
  return res;
};

const firstFetch = async () => {
  if (cache["x-total-count"] !== "-1") {
    return;
  }
  fetchNCache(1);
};

export const getPage = async (
  pageNumber: number,
  scope: number[]
): Promise<Response> => {
  let res: Response = {} as Response;

  await getKey();
  await firstFetch();

  if (JSON.stringify(scope) === JSON.stringify(cache.scope)) {
    console.log("cache hit");
    res.data = cache.pages[pageNumber];
    releaseKey();
  } else if (pageNumber in cache.pages) {
    console.log("page in cahce updating scope");
    res.data = cache.pages[pageNumber];
    releaseKey();
    updateScope(scope);
  } else {
    console.log("page not in cache");
    res = await getPageAndUpdateUnsafe(pageNumber, scope);
    releaseKey();
  }

  res.headers = { "x-total-count": cache["x-total-count"] };
  return res;
};

export const deletePost = async (
  ith: number,
  currPage: number
): Promise<{ status: number }> => {
  await getKey();
  const res = await deleteRequest(ith);

  if (res.status === 204) {
    const lastPage = Math.ceil(+cache["x-total-count"] / 10);

    cache["x-total-count"] = (+cache["x-total-count"] - 1).toString();

    const shouldRemovePage =
      +cache["x-total-count"] % 10 === 0 && currPage === lastPage;

    shouldRemovePage &&
      cache.scope.map((page, i) => {
        if (page === 0) {
          return;
        }
        cache.scope[i] = page - 1;
      });
    shouldRemovePage && releaseKey();
    shouldRemovePage
      ? updateScope(cache.scope)
      : updateCacheFromPageUnsafe(currPage).then(() => {
          releaseKey();
        });
  } else {
    releaseKey();
  }

  return res;
};

export const addPost = async (
  post: PostParams
): Promise<{ status: number }> => {
  await getKey();
  const res = await addRequest(post);
  if (res.status === 201) {
    const lastPage = Math.ceil(+cache["x-total-count"] / 10);
    cache["x-total-count"] = (+cache["x-total-count"] + 1).toString();
    updateCacheFromPageUnsafe(lastPage).then(() => {
      releaseKey();
    });
  } else {
    releaseKey();
  }
  return res;
};
