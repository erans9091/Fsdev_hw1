import Post from "./Post";
import { Dispatch, SetStateAction, useState } from "react";
import { PostParams } from "../types";
import AddPostForm from "./AddPostForm";

const Page = ({
  posts,
  pageNumber,
  addPost,
  updatePost,
  deleteAction,
  isLogin,
  name
}: {
  posts: PostParams[];
  pageNumber: number;
  addPost: (post: PostParams) => void;
  updatePost: (
    ith: number,
    post: PostParams,
    thenf: (res: any) => void
  ) => void;
  deleteAction: (ith: number) => void;
  isLogin: boolean;
  name: String;
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="page">
      <h1>Page {pageNumber}</h1>
      {posts.map((post, index) => (
        <Post
          post={post}
          key={post.id}
          updatePost={updatePost}
          ith={index + 1}
          deleteAction={deleteAction}
          isLogin={isLogin}
          name={name}
        />
      ))}
      {showAddForm && isLogin ? (
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
