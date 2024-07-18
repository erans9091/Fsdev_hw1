import App from "../components/App";
import { getPage, getCache } from "../utils/cache";
import type { Cache } from "../utils/cache";

const Home = ({ totalCount, cache }: { totalCount: number; cache: Cache }) => {
  return <App totalCount={totalCount} cache={cache} />;
};

export const getStaticProps = async () => {
  const res = await getPage(1, [1, 2, 3, 4, 5]);
  const cache = getCache();

  return {
    props: {
      totalCount: +res.headers["x-total-count"],
      cache,
    },
  };
};

export default Home;
