import axios from "axios";

import { PostParams } from "../types";
const NOTES_URL = "http://localhost:3001/notes";

export const fetchPage = async (page: number, postsPerPage = 10) => {
  const res = await axios.get(
    `${NOTES_URL}?_page=${page}&_limit=${postsPerPage}`
  );
  return res;
};

export const deleteRequest = async (ith: number) => {
  const res = await axios.delete(`${NOTES_URL}/${ith}`);
  return res;
};

export const addRequest = async (post: PostParams) => {
  const res = await axios.post(NOTES_URL, { post });
  return res;
};

export const updatePostRequest = async (ith: number, post: PostParams) => {
  const res = await axios.put(NOTES_URL + "/" + ith, { post });
  return res;
};
