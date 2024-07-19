"use client";
// Libraries
import { useState, useEffect } from "react";
// Components
import Page from "./Page";
import Pagination from "./Pagination";
import SignupForm from "./SignupForm";
import LoginForm from "./Login";
// Types
import { PostParams } from "../types";
import type { Cache } from "../utils/cache";
// Utils
import {
  getPage,
  deletePost,
  addPost as addPostCacheWrap,
  updatePost as updatePostCacheWrap,
  initCacheFromProp,
} from "../utils/cache";

import {
  setToken,
  getName,
  getEmail,
  signup,
  loginRap as login,
} from "../utils/fetchUtils";

const postsPerPage = 10;

const App = ({
  totalCount,
  cache,
}: {
  totalCount: number;
  cache: Cache;
}) => {

  useEffect(() => {
    initCacheFromProp(cache);
  }, [cache]);

  const [posts, setPosts] = useState<PostParams[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(totalCount);
  const [theme, setTheme] = useState("light");
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
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
  }, [currPage, totalPosts]);

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

  const addPost = async (post: PostParams) => {
    const lastPage = Math.ceil(totalPosts / postsPerPage);
    const updatePagination =
      currPage === lastPage ||
      (totalPosts % postsPerPage === 0 &&
        (currPage === lastPage - 1 || currPage === lastPage - 2));
    addPostCacheWrap(post)
      .then((res) => {
        res.status === 201 && updatePagination && setTotalPosts(totalPosts + 1);
        if (res.status === 201) {
          setTotalPosts(totalPosts + 1);
        }
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
    updatePostCacheWrap(curith, post, currPage)
      .then(thenf)
      .catch((error) => console.error("Error updating post:", error));
  };

  const deleteAction = async (ith: number) => {
    const curith = postsPerPage * (currPage - 1) + ith;
    console.log("Deleting post number: ", curith);
    deletePost(curith, currPage)
      .then((res) => {
        if (res.status === 204) {
          setTotalPosts((curr) => curr - 1);

          // Determine whether to decrement the current page
          const newTotalPosts = totalPosts - 1;
          const lastPage = Math.ceil(newTotalPosts / postsPerPage);

          if (currPage > lastPage && newTotalPosts % postsPerPage === 0) {
            setCurrPage(lastPage);
          }
        }
        console.log("Post deleted successfully:", res.status);
      })
      .catch((error) => {
        console.log("Error deleting post:");
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className={`app ${theme}`}>
      <SignupForm creatFunc={signup} />
      <LoginForm loginFunc={login(setIsLoggedin)} />
      <br />
      <button
        name="logout"
        onClick={() => {
          setIsLoggedin(false);
          setToken("");
        }}
      >
        Logout
      </button>
      <br />
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        name="change_theme"
      >
        theme
      </button>
      <Page
        posts={posts}
        pageNumber={currPage}
        addPost={addPost}
        updatePost={updatePost}
        deleteAction={deleteAction}
        isLoggedin={isLoggedin}
        name={getName()}
        email={getEmail()}
      />
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        pagesRange={calcPagesRange()}
        maxPage={Math.ceil(totalPosts / postsPerPage)}
      />
      <button
        onClick={() => {
          updatePostCacheWrap(
            1,
            { title: "sample test", content: "sample test", author: { name: "sample test", email: "sample test" } },
            1
          );
        }}
      >
        sample test send put req to notes you dont own
      </button>
    </div>
  );
};

export default App;
