"use client";
import { useState, useEffect, use } from "react";

import Page from "./components/Page";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

import { pages } from "next/dist/build/templates/app-page";

// import script from "../../scripts/generateNotes"

const App = () => {
  //   console.log(script())
  const [posts, setPosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const NOTES_URL = "http://localhost:3001/notes";

  useEffect(() => {
    fetch(NOTES_URL + `?_page=${currPage}` + `&_limit=${postsPerPage}`)
      .then((res) => {

        res.headers.get("x-total-count") && setTotalPosts(+res.headers.get("x-total-count")!);
        return res.json();
      })
      .then((data) => {
        setPosts(
          data.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
        );
      })
      .catch((error) => {
        console.log("Encountered an error:" + error);
      });
  }, []);

  
  const calcPagesRange = () => {
    const maxPage = Math.ceil(totalPosts / postsPerPage);
    if (currPage <= 3) {
      return Array.from({ length: Math.min(maxPage, 5) }, (_, i) => i + 1);
    }
    if (currPage > maxPage - 2) {
      return [maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage];
    }
    return [currPage - 2, currPage - 1, currPage, currPage + 1, currPage + 2];
  };

  const setPostsInPage = (numberOfPosts: number) => {
    setCurrPage(1);
    setPostsPerPage(numberOfPosts);
  };
  useEffect(() => {
    fetch(NOTES_URL + `?_page=${currPage}` + `&_limit=${postsPerPage}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.log("Encountered an error:" + error);
      });
  }, [currPage, postsPerPage]);

  return (
    <div className="app">
      <Header postsPerPage={postsPerPage} setPostsPerPage={setPostsInPage} />
      <Page posts={posts} pageNumber={currPage} />
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        pagesRange={calcPagesRange()}
        maxPage={Math.ceil(totalPosts / postsPerPage)}
      />
    </div>
  );
};

export default App;
