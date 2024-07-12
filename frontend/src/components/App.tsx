"use client";
// Libraries
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Page from "./Page";
import Pagination from "./Pagination";
import Header from "./Header";
// Types
import { PostParams } from "../types";
// Utils
import {
  getPage,
  deletePost,
  addPost as addPostCacheWrap,
  updatePost as updatePostCacheWrap,
} from "../utils/cache";
//import { getPage, deletePost, addPost as addPostCacheWrap } from "../utils/cache";

import { setToken } from "../utils/fetchUtils";

const App = () => {
  // console.log(script())
  const [posts, setPosts] = useState<PostParams[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [theme, setTheme] = useState("light");
  const [auth, SetAuth] = useState(undefined);

  const NOTES_URL = "http://localhost:3001/notes";
  const LOGIN_URL = "http://localhost:3001/login";
  const SIGNUP_URL = "http://localhost:3001/signup";

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
    // axios
    //   .put(NOTES_URL + "/" + curith, { post })
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
  const signup = (name: String, email: String, un: String, pw: String) => {
    axios.post(SIGNUP_URL).then(() => {
      alert("user created");
    });
  }
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
      <button onClick={() => SetAuth(undefined)}>Logout</button>
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        pagesRange={calcPagesRange()}
        maxPage={Math.ceil(totalPosts / postsPerPage)}
      />
      <button
        onClick={() => {
          axios.post("http://localhost:3001/users", {
            user: {
              username: "test123",
              name: "test",
              password: "test",
              email: "test@d.com",
            },
          });
        }}
      >
        {" "}
        send post to '/users' login massage
      </button>

      <button
        onClick={() => {
          axios.post("http://localhost:3001/login", {
            user: { username: "test123", password: "test" },
          }).then((res) => {
            setToken(res.data.token);
          });
        }}
      >
        {" "}
        send post to '/login' login massage
      </button>
    </div>
  );
};

export default App;