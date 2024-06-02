

export type Page = {
    name: string
}

export type Pagination = {
    pagesRange: number[]
}

export type Author = {
    name: string,
    email: string
}

export type PostParams = {
    id: number,
    title: string,
    author: Author,
    content: string
}


export type QueryParams = {
    currPage: number,
    postsPerPage: number
}