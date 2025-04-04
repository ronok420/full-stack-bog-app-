

export function paginateBlogs(blogs, currentPage, cardsPerPage) {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return blogs.slice(startIndex, startIndex + cardsPerPage);
}

export function getTotalPages(filteredBlogs, cardsPerPage) {
    return Math.ceil(filteredBlogs.length / cardsPerPage);
}

//  Full Filter: by search, category, subCategory
export function filterBlogsByAll(blogs, searchQuery, category, subCategory) {
    return blogs.filter((blog) => {
        const matchesSearch = [blog.title, blog.content]
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesCategory = category ? blog.category === category : true;
        const matchesSubCategory = subCategory ? blog.subCategory === subCategory : true;

        return matchesSearch && matchesCategory && matchesSubCategory;
    });
}