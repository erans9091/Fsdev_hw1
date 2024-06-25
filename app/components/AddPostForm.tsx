import { useState, FormEvent } from "react";

import { PostParams } from "../types";

const AddPostForm = ({ addPost }: { addPost: (post: PostParams) => void }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");

  const clearForm = () => {
    setTitle("");
    setContent("");
    setAuthorName("");
    setAuthorEmail("");
  };

  const validateForm = () => {
    return title && content && authorName && authorEmail;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    addPost({
      title,
      content,
      author: {
        name: authorName,
        email: authorEmail,
      },
    });
    clearForm();
  };

  return (
    <div
      className="add-post-form
        "
    >
      <h2>Add a new note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </label>
        <label>
          Author name:
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          ></input>
        </label>
        <label>
          Author email:
          <input
            type="text"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
          ></input>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPostForm;
