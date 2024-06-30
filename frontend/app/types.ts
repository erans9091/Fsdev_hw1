export type Page = {
  name: string;
};

export type Pagination = {
  pagesRange: number[];
};

export type Author = {
  name: string;
  email: string;
};

export type PostParams = {
  title: string;
  author: Author;
  content: string;
  id?: number;
};

export type QueryParams = {
  currPage: number;
  postsPerPage: number;
};
