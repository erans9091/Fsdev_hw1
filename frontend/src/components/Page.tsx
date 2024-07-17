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
  isLoggedin,
  name,
  email,
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
  isLoggedin: boolean;
  name: string;
  email: string;
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="page">
      <h1>Page {pageNumber}</h1>
      {posts?.map((post, index) => (
        <Post
          post={post}
          key={post.id}
          updatePost={updatePost}
          ith={index + 1}
          deleteAction={deleteAction}
          isLoggedin={isLoggedin}
          name={name}
        />
      ))}
      {showAddForm && isLoggedin ? (
        <AddPostForm
          addPost={addPost}
          cancel_func={() => setShowAddForm(false)}
          name={name}
          email={email}
        />
      ) : (
        isLoggedin && <button onClick={() => isLoggedin && setShowAddForm(true)} name="add_new_note">
          Add a new note
        </button>
      )}
    </div>
  );
};

export default Page;
