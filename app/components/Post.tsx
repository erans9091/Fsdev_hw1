import { useRef, useState } from "react";
import { PostParams } from "../types";

const Post = ({ post }: { post: PostParams }) => {
  const deleteAction = () => { }
  const editAction = () => { }
  const [content, UpadateContent] = useState(post.content);
  const contRef = useRef(null);
  const contentChange = () => {
    if (contRef.current) {
      const par: HTMLParagraphElement = contRef.current;
      if (par.textContent) {
        UpadateContent(par.textContent);
      }
    }
  }
  return (
    <div className="note" id={"" + post.id} key={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.author.name}</h3>
      <p contentEditable="true" ref={contRef} onChange={contentChange}>{post.content}</p>
      <button onClick={editAction}>edit</button>
      <button onClick={deleteAction}>delete</button>
    </div>
  );
};

export default Post;
