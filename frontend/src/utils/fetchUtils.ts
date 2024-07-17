import axios from "axios";

import { PostParams } from "../types";
const NOTES_URL = "http://localhost:3001/notes";
const LOGIN_URL = "http://localhost:3001/login";
const SIGNUP_URL = "http://localhost:3001/users";
let token = "";
let name = ""
let email = ""
export const fetchPage = async (page: number, postsPerPage = 10) => {
  const res = await axios.get(
    `${NOTES_URL}?_page=${page}&_limit=${postsPerPage}`
  );
  return res;
};

export const deleteRequest = async (ith: number) => {
  const res = await axios.delete(`${NOTES_URL}/${ith}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const addRequest = async (post: PostParams) => {
  // const res = await axios.post(NOTES_URL, { post });
  const res = await axios.post(NOTES_URL, post, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const updatePostRequest = async (ith: number, post: PostParams) => {
  const res = await axios.put(NOTES_URL + "/" + ith, { post },{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const setToken = (newToken: string) => {
  token = newToken;
}

export const signup = async (name: String, email: String, un: String, pw: String) => {
  const res = await axios.post(SIGNUP_URL, {
    user: {
      name,
      email,
      username: un,
      password: pw
    }
  }).then((res) => {
    if (res.status == 201) {
      alert("user created");
    } else {
      alert(res.status);
    }
  }).catch((err) => {
    alert("cant create user");
    console.log(err)
  });
  return res;
}

export const login = async (un: String, pw: String, setIsLoggedin: Function) => {
  const res = await axios.post(LOGIN_URL, {
    user: {
      username: un,
      password: pw
    }
  }).then((res) => {
    if (res.status == 200) {
      alert("user logedin");
      setToken(res.data.token);
      setIsLoggedin(true);
      name = res.data.name;
      email = res.data.email;
    } else {
      alert(res.status);
    }
  }).catch((err) => {
    alert("cant login");
    console.log(err)
  });
  return res;
}
export const loginRap = (setlogin: Function): Function => {
  return (un: String, pw: String) => { login(un, pw, setlogin) }
}
export const getName = () => name;

export const getEmail = () => email;