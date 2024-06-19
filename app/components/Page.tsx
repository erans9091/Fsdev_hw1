import Post from "./Post";
import { Dispatch, SetStateAction } from "react";
import { PostParams } from "../types";
const Page = ({
  posts,
  pageNumber,
  baseUrl,
  setReFetch,
}: {
  posts: PostParams[];
  pageNumber: number;
  baseUrl: string;
  setReFetch: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="page">
      <h1>Page {pageNumber}</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} baseUrl={baseUrl} setReFetch={setReFetch} />
      ))}
      <button>add new note</button>
    </div>
  );
};

export default Page;
