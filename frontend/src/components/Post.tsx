import { useRef, useState, Dispatch, SetStateAction } from "react";
import { PostParams } from "../types";
import { AxiosResponse } from "axios";

const Post = ({
  post,
  updatePost,
  ith,
  deleteAction,
  isLoggedin,
  name
}: {
  post: PostParams;
  updatePost: (ith: number, post: PostParams, thenf: (res: any) => void) => void;
  ith: number;
  deleteAction: (ith: number) => void;
  isLoggedin: boolean;
  name: String;
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
  const isMy = () => isLoggedin && post.author.name === name

  return (
    <div className="note" id={"" + post.id} key={post.id}>
      <h2>{post.title}</h2>
      <h3 className="auther_name">{post?.author?.name}</h3>
      <p>{post.content}</p>
      {!isEdit && isMy() && (
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
      {isMy() && <button name={"delete-" + post.id} onClick={() => deleteAction(ith)}>
        delete
      </button>}
    </div>
  );
};

export default Post;
