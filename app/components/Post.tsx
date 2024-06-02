import { PostParams } from "../types";

const Post = ({ post }: { post: PostParams }) => {
  return (
    <div className="post" id={""+post.id} key={post.id}>
      <h2>{post.title}</h2>
      <h3>{post.author.name}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
