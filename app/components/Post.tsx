import { useRef, useState, useEffect } from "react";
import { PostParams } from "../types";

const Post = ({ post }: { post: PostParams }) => {
  const [content, updateContent] = useState(post.content);
  const contRef = useRef<HTMLParagraphElement>(null);

  const updatePost = async () => {
    try {
      const response = await fetch(`localhost:3000/notes/${post.id}`, {
        method: 'PUT', // or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: contRef.current?.textContent })
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }
      const updatedPost = await response.json();
      console.log('Post updated successfully', updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  // Update state when contentEditable changes
  const contentChange = () => {
    if (contRef.current) {
      const par = contRef.current;
      updateContent(par.textContent || '');
    }
  };

  // Add event listeners for contentEditable changes
  useEffect(() => {
    const par = contRef.current;
    if (par) {
      par.addEventListener('input', contentChange);
    }
    return () => {
      if (par) {
        par.removeEventListener('input', contentChange);
      }
    };
  }, []);

  const deleteAction = () => {
    //sent delete request
  };

  const editAction = () => {
    //sent update request
    updatePost()
  };

  return (
    <div className="note" id={"" + post.id} key={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.author.name}</h3>
      <p contentEditable="true" ref={contRef}>{content}</p>
      <button onClick={editAction}>edit</button>
      <button onClick={deleteAction}>delete</button>
    </div>
  );
};

export default Post;
