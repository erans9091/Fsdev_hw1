const Header = ({
  postsPerPage,
  setPostsPerPage,
}: // (postsPerPage: number) => void
{
  postsPerPage: number;
  setPostsPerPage: (postsPerPage: number) => void;
}) => {
  const debounce = (func: any, wait: number = 500) => {
    let timeout: any;
    return (postsNumber: number) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        postsNumber > 0 && func(postsNumber);
      }, wait);
    };
  };

  const setPostsPerPageDebounced = debounce(setPostsPerPage);

  return (
    <div className="header">
      <h1>My App</h1>
      <p>
        Posts per page: {" "}
        <input
          type="number"
          placeholder={`${postsPerPage}`}
          onChange={(e) => setPostsPerPageDebounced(+e.target.value)}
        />
      </p>
    </div>
  );
};

export default Header;
