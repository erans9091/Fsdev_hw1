export const calcPagesRange = (currPage: number, totalPosts: number, postsPerPage = 10) => {
    const maxPage = Math.ceil(totalPosts / postsPerPage);
    if (currPage <= 3) {
        return Array.from({ length: Math.max(maxPage, 5) }, (_, i) => i + 1);
    }
    if (currPage > maxPage - 2) {
        return maxPage == 4 ? [maxPage - 3, maxPage - 2, maxPage - 1, maxPage, maxPage + 1] : [maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage];
    }
    return [currPage - 2, currPage - 1, currPage, currPage + 1, currPage + 2];
};