import Post from "./Post";

import { PostParams } from "../types";
const Page = ({
  posts,
  pageNumber,
}: {
  posts: PostParams[];
  pageNumber: number;
}) => {
  return (
    <div className="page">
      <h1>Page {pageNumber}</h1>
      {posts.map((post) => (
        <Post post={post} key = {post.id}/>
      ))}
    </div>
  );
};

export default Page;
