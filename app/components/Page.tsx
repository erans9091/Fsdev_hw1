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
  updatePost,
  deleteAction,
}: {
  posts: PostParams[];
  pageNumber: number;
  baseUrl: string;
  addPost: (post: PostParams) => void;
  setReFetch: Dispatch<SetStateAction<boolean>>;
  updatePost: (
    ith: number,
    post: PostParams,
    thenf: (res: any) => void
  ) => void;
  deleteAction: (ith: number) => void;
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="page">
      <h1>Page {pageNumber}</h1>
      <button>theme</button>
      {posts.map((post, index) => (
        <Post
          post={post}
          key={post.id}
          baseUrl={baseUrl}
          setReFetch={setReFetch}
          updatePost={updatePost}
          ith={index + 1}
          deleteAction={deleteAction}
        />
      ))}
      {showAddForm ? (
        <AddPostForm
          addPost={addPost}
          cancel_func={() => setShowAddForm(false)}
        />
      ) : (
        <button onClick={() => setShowAddForm(true)} name="add_new_note">
          Add a new note
        </button>
      )}
    </div>
  );
};

export default Page;
