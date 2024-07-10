"use client";
// Libraries
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Page from "./components/Page";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
// Types
import { PostParams } from "./types";
// Utils
import { getPage, deletePost ,addPost as addPostCacheWrap} from "./utils/cache";

// import script from "../../scripts/generateNotes"

const App = () => {
  //   console.log(script())
  const [posts, setPosts] = useState<PostParams[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [theme, setTheme] = useState("light");

  const NOTES_URL = "http://localhost:3001/notes";

  useEffect(() => {
    // axios
    //   .get(NOTES_URL + `?_page=${currPage}` + `&_limit=${postsPerPage}`)
    getPage(
      currPage,
      calcPagesRange().length ? calcPagesRange() : [1, 2, 3, 4, 5]
    )
      .then((res) => {
        setTotalPosts(+res.headers["x-total-count"]);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log("Encountered an error:" + error);
      });
  }, [currPage, postsPerPage, totalPosts]);

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
  const addPost = async (post: PostParams) => {
    const lastPage = Math.ceil(totalPosts / postsPerPage);
    const updatePagination =
      currPage === lastPage ||
      (totalPosts % postsPerPage === 0 &&
        (currPage === lastPage - 1 || currPage === lastPage - 2));
    // axios
    //   .post(NOTES_URL, { post })
    addPostCacheWrap(post)
      .then((res) => {
        res.status === 201 && updatePagination && setTotalPosts(totalPosts + 1);
        console.log("Post added successfully", res.status);
      })
      .catch((error) => {
        console.error("Error adding post:", error);
        return error.status;
      });
    return 0;
  };
  const updatePost = async (
    ith: number,
    post: PostParams,
    thenf: (res: any) => void
  ) => {
    const curith = postsPerPage * (currPage - 1) + ith;
    axios
      .put(NOTES_URL + "/" + curith, { post })
      .then(thenf)
      .catch((error) => console.error("Error updating post:", error));
  };
  const deleteAction = async (ith: number) => {
    const curith = postsPerPage * (currPage - 1) + ith;
    console.log("Deleting post number: ", curith);
    // axios
    //   .delete(NOTES_URL + "/" + curith)
    deletePost(curith,currPage)
      .then((res) => {
        if (res.status == 204) {
          setTotalPosts((curr) => curr - 1);
          if (totalPosts === curith && totalPosts % postsPerPage === 1) {
            //means we deleted the last post in the current page
            setCurrPage(currPage - 1);
          }
          console.log("Post deleted succesfully");
        } else if (res.status == 500) {
          console.log("Can't deleted post");
        }
      })
      .catch((error) => {
        console.log("Error deleting post:");
        console.error("Error updating post:", error);
      });
  };
  return (
    <div className={`app ${theme}`}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        name="change_theme"
      >
        theme
      </button>
      <Header postsPerPage={postsPerPage} setPostsPerPage={setPostsInPage} />
      <Page
        posts={posts}
        pageNumber={currPage}
        addPost={addPost}
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
