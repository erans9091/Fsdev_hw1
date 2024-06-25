import { useRef, useState, Dispatch, SetStateAction } from "react";
import { PostParams } from "../types";
import { AxiosResponse } from "axios";

const Post = ({
  post,
  baseUrl,
  setReFetch,
  updatePost,
  ith
}: {
  post: PostParams;
  baseUrl: string;
  setReFetch: Dispatch<SetStateAction<boolean>>;
  updatePost: (ith: number, post: PostParams, thenf: (res: any) => void) => void;
  ith: number;
}) => {
  const [content, updateContent] = useState(post.content);
  const [isEdit, setIsEdit] = useState(false);
  const contRef = useRef<HTMLInputElement>(null);


  // Update state when contentEditable changes
  const contentChange = () => {
    if (contRef.current) {
      const par = contRef.current;
      updateContent(par.value || "");
    }
  };

  const deleteAction = async () => {
    fetch(`${baseUrl}/${post.id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          console.log("response", response);
          setReFetch((prev) => !prev);
          //TODO re-render the page with new set of notes
        } else {
          console.error("Failed to delete post");
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const saveEdit = () => {
    //sent update request
    updatePost(ith, { ...post, content: content }, async (res: AxiosResponse<any, any>) => {
      if (res.status == 201) {
        const updatedPost = await res.data;
        post.content = content;
        setIsEdit(false);
        console.log("Post updated successfully", updatedPost);
      } else if (res.status == 500) {
        console.log("Post failed to update");
      }
    });
  };

  return (
    <div className="note" id={"" + post.id} key={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.author.name}</h3>
      <p>{post.content}</p>
      {!isEdit && (
        <button name={"edit-" + post.id} onClick={() => setIsEdit(true)}>
          edit
        </button>
      )}
      {isEdit && (
        <>
          <input
            type="text"
            name={"text_input-" + post.id}
            ref={contRef}
            defaultValue={content}
            onChange={contentChange}
          ></input>
          <button name={"text_input_save-" + post.id} onClick={saveEdit}>
            SAVE
          </button>
          <button
            name={"text_input_cancel-" + post.id}
            onClick={() => {
              setIsEdit(false);
              updateContent(post.content);
            }}
          >
            CANCEL
          </button>
        </>
      )}
      <br></br>
      <button name={"delete-" + post.id} onClick={deleteAction}>
        delete
      </button>
    </div>
  );
};

export default Post;
