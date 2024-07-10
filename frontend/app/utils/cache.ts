import { PostParams } from "../types";
import { fetchPage } from "./fetchUtils";

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
  "x-total-count": "1",
  key: 1,
};

const updateScope = async (scope: number[]) => {
  cache.scope = scope;
  // clear cache
  Object.keys(cache.pages).forEach((pageNumber) => {
    if (!scope.includes(+pageNumber)) {
      delete cache.pages[+pageNumber];
    }
  });
  // update cache
  scope.forEach(async (pageNumber) => {
    if (cache.pages[pageNumber]) {
      return;
    }
    const res = await fetchPage(pageNumber);
    +res.headers["x-total-count"] &&
      updateTotalCount(res.headers["x-total-count"]);
    cache.pages[pageNumber] = res.data;
  });
};

const updateTotalCount = (total: string) => {
  cache["x-total-count"] = total;
};

const cachePage = (pageNumber: number, posts: PostParams[]) => {
  cache.pages[pageNumber] = posts;
};

const getPageAndUpdate = async (
  pageNumber: number,
  scope: number[]
): Promise<Response> => {
  if (cache.pages[pageNumber]) {
    return {
      data: cache.pages[pageNumber],
      headers: { "x-total-count": cache["x-total-count"] },
    };
  }
  const res = await fetchPage(pageNumber);

  cachePage(pageNumber, res.data);
  updateScope(scope);
  return {
    data: res.data,
    headers: { "x-total-count": res.headers["x-total-count"] },
  };
};

export const getPage = async (
  pageNumber: number,
  scope: number[]
): Promise<Response> => {
  while (cache.key !== 1) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  cache.key = 0;

  let res: Response = {
    data: [],
    headers: {
      "x-total-count": cache["x-total-count"],
    },
  };
  if (JSON.stringify(scope) === JSON.stringify(cache.scope)) {
    res.data = cache.pages[pageNumber];
  } else if (cache.scope.includes(pageNumber)) {
    updateScope(scope);
    res.data = cache.pages[pageNumber];
  } else {
    res = await getPageAndUpdate(pageNumber, scope);
  }
  cache.key = 1;
  return res;
};
