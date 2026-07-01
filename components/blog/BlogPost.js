import { useEffect, useState } from "react";
import BlogCard1 from "./BlogCard1";
import Pagination from "./Pagination";

export default function BlogPost({ posts = [], style, showItem, showPagination }) {
  const [currentPage, setCurrentPage] = useState(1);
  const showLimit = showItem;
  const paginationItem = 4;

  const [pagination, setPagination] = useState([]);
  const [limit, setLimit] = useState(showLimit);
  const [pages, setPages] = useState(
    Math.max(1, Math.ceil(posts.length / showLimit))
  );

  useEffect(() => {
    const arr = new Array(Math.ceil(posts.length / limit))
      .fill()
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.max(1, Math.ceil(posts.length / limit)));
  }, [limit, posts.length]);

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedProducts = posts.slice(startIndex, endIndex);

  const start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  const end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  return (
    <>
      {getPaginatedProducts.length === 0 && (
        <h3>No blog posts found</h3>
      )}

      {getPaginatedProducts.map((item) => (
        <BlogCard1 item={item} key={item.id} />
      ))}

      {showPagination && pages > 1 && (
        <Pagination
          getPaginationGroup={getPaginationGroup}
          currentPage={currentPage}
          pages={pages}
          next={next}
          prev={prev}
          handleActive={handleActive}
        />
      )}
    </>
  );
}
