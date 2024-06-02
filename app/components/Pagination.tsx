import { Page } from "../types";

import "../styles.css";

const Pagination = ({
  currPage,
  setCurrPage,
  pagesRange,
  maxPage,
}: {
  currPage: number;
  setCurrPage: any;
  pagesRange: number[];
  maxPage: number;
}) => {
  const handlePageChange = (page: number) => {
    maxPage >= page && setCurrPage(page);
  };

  const handleArrowClick = (direction?: string) => {
    if (direction === "left") {
      handlePageChange(currPage - 1);
    } else {
      handlePageChange(currPage + 1);
    }
  };
  const handleEdge = (edge: string) => {
    if (edge === "first") {
      handlePageChange(1);
    } else {
      handlePageChange(maxPage);
    }
  };

  return (
    <div className="pagination">
      {!pagesRange.includes(1) && (
        <button onClick={() => handleEdge("first")} name="first">
          first
        </button>
      )}
      {pagesRange[0] !== 1 && (
        <button onClick={() => handleArrowClick("left")} name="previous">
          &laquo;
        </button>
      )}
      {pagesRange.map((i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currPage ? "current" : ""}
          name={"page-" + currPage}
        >
          {i}
        </button>
      ))}
      {!pagesRange.includes(maxPage) && (
        <>
          <button onClick={() => handleArrowClick()} name="next">
            &raquo;
          </button>
          <button onClick={() => handleEdge("last")} name="last">
            last
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
