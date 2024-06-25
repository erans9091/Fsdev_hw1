"use client";
import { useState, useEffect } from "react";

import Page from "./components/Page";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

import axios from "axios";

import { PostParams } from "./types";

// import script from "../../scripts/generateNotes"

const App = () => {
  //   console.log(script())
  const [posts, setPosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [reFetch, setReFetch] = useState(true);

  const NOTES_URL = "http://localhost:3001/notes";

  useEffect(() => {
    axios
      .get(NOTES_URL + `?_page=${currPage}` + `&_limit=${postsPerPage}`)
      .then((res) => {
        // res.headers["x-total-count"] &&     TODO?
        setTotalPosts(+res.headers["x-total-count"]);
        setPosts(
          res.data // TODO sort?
        );
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Encountered an error:" + error);
      });
  }, [currPage, postsPerPage, reFetch]);

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

  // id: number,
  // title: string,
  // author: Author,
  // content: string
  const addPost = (post: PostParams) => {
    axios
      .post(NOTES_URL, { post })
      .then((res) => {
        const lastPage = Math.ceil(totalPosts / postsPerPage);
        res.status === 201 &&
          currPage === lastPage &&
          //posts.length < postsPerPage &&
          // setReFetch((prev) => !prev); TODO fix
          setTotalPosts(totalPosts + 1);
        console.log("Post added successfully", res.status);
      })
      .catch((error) => {
        console.error("Error adding post:", error);
        return error.status;
      });
    return 0;
  };
  const updatePost = async (ith: number, post: PostParams, thenf: (res: any) => void) => {
    const curith = postsPerPage * (currPage - 1) + ith;
    axios
      .put(NOTES_URL + "/" + curith, { post })
      .then(thenf)
      .catch((error) => console.error("Error updating post:", error));
  }
  const deleteAction = async (ith: number) => {
    const curith = postsPerPage * (currPage - 1) + ith;
    axios
      .delete(NOTES_URL + "/" + curith)
      .then((res) => {
        if (res.status == 204) {
          setTotalPosts(totalPosts - 1);//triger rerender
          if (totalPosts == curith && totalPosts % postsPerPage == 1) {
            //means we deleted the last post in the current page
            setCurrPage(currPage - 1);
          }
          console.log("Post deleted succesfully");
        } else if (res.status == 500) {
          console.log("Can't deleted post");
        }

      })
      .catch((error) => console.error("Error updating post:", error));

  };
  return (
    <div className="app">
      <Header postsPerPage={postsPerPage} setPostsPerPage={setPostsInPage} />
      <Page
        posts={posts}
        pageNumber={currPage}
        baseUrl={NOTES_URL}
        addPost={addPost}
        setReFetch={setReFetch}
        updatePost={updatePost}
        deleteAction={deleteAction}
      />
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
