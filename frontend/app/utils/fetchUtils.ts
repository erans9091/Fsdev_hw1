import axios from "axios";

export const fetchPage = async (page: number, postsPerPage = 10) => {
    const res = await axios.get(
        `http://localhost:3001/notes?_page=${page}&_limit=${postsPerPage}`
    );
    return res;
    };