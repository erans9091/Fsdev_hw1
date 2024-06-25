import Post from "./Post";
import { Dispatch, SetStateAction, useState } from "react";
import { PostParams } from "../types";
import AddPostForm from "./AddPostForm";


const Page = ({
  posts,
  pageNumber,
  baseUrl,
  addPost,
  setReFetch,
}: {
  posts: PostParams[];
  pageNumber: number;
  baseUrl: string;
  addPost: (post: PostParams) => void;
  setReFetch: Dispatch<SetStateAction<boolean>>;
}) => {

  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="page">
      <h1>Page {pageNumber}</h1>
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          baseUrl={baseUrl}
          setReFetch={setReFetch}
        />
      ))}
      {
        showAddForm ? (
          <AddPostForm addPost={addPost} />
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
          >
            Add a new note
          </button>
        )
      }
    </div>
  );
};

export default Page;
