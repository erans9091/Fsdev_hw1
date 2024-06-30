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
      <button
        onClick={() => currPage !== 1 && handleEdge("first")}
        name="first"
      >
        First
      </button>
      <button
        onClick={() => currPage !== 1 && handleArrowClick("left")}
        name="previous"
      >
        Prev
      </button>
      {pagesRange.map((i) => (
        <button
          key={"page-"+i}
          onClick={() => handlePageChange(i)}
          className={i === currPage ? "current" : ""}
          name={"page-" + i}
        >
          {i}
        </button>
      ))}
      <button
        onClick={() => currPage !== maxPage && handleArrowClick()}
        name="next"
      >
        Next
      </button>
      <button
        onClick={() => currPage !== maxPage && handleEdge("last")}
        name="last"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
