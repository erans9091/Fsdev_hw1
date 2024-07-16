import { useState, FormEvent } from "react";

import { PostParams } from "../types";

const AddPostForm = ({
  addPost,
  cancel_func,
  name,
  email,
}: {
  addPost: (post: PostParams) => void;
  cancel_func: any;
  name: string;
  email: string;
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [authorName, setAuthorName] = useState("");
  // const [authorEmail, setAuthorEmail] = useState("");

  const clearForm = () => {
    setTitle("");
    setContent("");
    // setAuthorName("");
    // setAuthorEmail("");
  };

  const validateForm = () => {
    return title && content;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    let temp = {
      title,
      content,
      author: {
        name,
        email,
      },
    };
    addPost(temp);
    //clearForm();
  };

  return (
    <div className="add-post-form">
      <h2>Add a new note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="text_input_title_new_note"
          ></input>
        </label>
        <label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="text_input_new_note"
          ></input>
        </label>
        <label>
          Author name:
          <input
            type="text"
            value={name}
            disabled
            name="text_input_name_new_note"
          ></input>
        </label>
        <label>
          Author email:
          <input
            type="text"
            value={email}
            disabled
            name="text_input_email_new_note"
          ></input>
        </label>
        <button type="submit" name="text_input_save_new_note">
          save
        </button>
        <button onClick={cancel_func} name="text_input_cancel_new_note">
          cancel
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
