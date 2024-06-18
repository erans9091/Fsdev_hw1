import { useRef, useState, useEffect } from "react";
import { PostParams } from "../types";

const Post = ({ post }: { post: PostParams }) => {
	const [content, updateContent] = useState(post.content);
	const [isEdit, setIsEdit] = useState(false);
	const contRef = useRef<HTMLInputElement>(null);

	const updatePost = async () => {
		try {
			const response = await fetch(`http://localhost:3000/notes/${post.id}`, {//fix id parameter
				method: 'PUT', // or 'PATCH' depending on your API
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ content: contRef.current?.value })
			});

			if (!response.ok) {
				throw new Error('Failed to update post');
			}
			const updatedPost = await response.json();
			post.content = content;
			setIsEdit(false)
			console.log('Post updated successfully', updatedPost);
		} catch (error) {
			console.error('Error updating post:', error);
		}
	};

	// Update state when contentEditable changes
	const contentChange = () => {
		if (contRef.current) {
			const par = contRef.current;
			updateContent(par.value || '');
		}
	};

	const deleteAction = async () => {
		//sent delete request
		try {
			const response = await fetch(`http://localhost:3000/notes/${post.id}`, {
				method: 'DELETE', // or 'PATCH' depending on your API
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ id: post.id })
			});
			if (!response.ok) {
				throw new Error('Failed to delete post');
			}
			const updatedPost = await response.json();
			console.log('Post deleted successfully', updatedPost);
			//TODO re-render the page with new set of notes
		} catch (error) {
			console.error('Error deleting post:', error);
		}

	};

	const saveEdit = () => {
		//sent update request
		updatePost()
	};

	return (
		<div className="note" id={"" + post.id} key={post.id}>
			<h2>{post.title}</h2>
			<h3>{post.author.name}</h3>
			<p>{post.content}</p>
			{!isEdit && <button name={"edit-" + post.id} onClick={() => setIsEdit(true)}>edit</button>}
			{isEdit && <>
				<input type="text" name={"text_input-" + post.id} ref={contRef}
					defaultValue={content} onChange={contentChange}></input>
				<button name={"text_input_save-" + post.id} onClick={saveEdit}>SAVE</button>
				<button name={"text_input_cancel-" + post.id} onClick={() => {
					setIsEdit(false);
					updateContent(post.content)
				}}>CANCEL</button>
			</>}
			<br></br>
			<button name={"delete-" + post.id} onClick={deleteAction}>delete</button>
		</div>
	);
};

export default Post;
