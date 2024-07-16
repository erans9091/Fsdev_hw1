import App from "../components/App";
import { getPage } from "../utils/cache";
import { PostParams } from "../types";

const Home = ({
  posts,
  totalCount,
}: {
  posts: PostParams[];
  totalCount: number;
}) => {
  return <App posts={posts} totalCount={totalCount} />;
};

export const getStaticProps = async () => {
  const res = await getPage(1, [1, 2, 3, 4, 5]);
  return {
    props: {
      posts: res.data,
      totalCount: +res.headers["x-total-count"],
    },
  };
};

export default Home;
