import React from "react";

import { Link } from "react-router-dom";

export const usePaginationList = (pageCount, currentPage, setPage) => {
  const links = ["<<", "<", ">", ">>"];
  const pages = [...Array(pageCount)].map((element, index) => index + 1);
  links.splice(2, 0, ...pages);

  const className = "pagination-list__link";

  return links.map((element) => {
    if (element === "<<") {
      return (
        <Link to="/" key={element} className={className} onClick={() => setPage(1)}>
          {element}
        </Link>
      );
    }
    if (element === "<") {
      const lastPage = currentPage - 1 > 1 ? currentPage - 1 : 1;
      return (
        <Link to="/" key={element} className={className} onClick={() => setPage(lastPage)}>
          {element}
        </Link>
      );
    }
    if (element === ">") {
      const nextPage = currentPage + 1 > pageCount ? pageCount : currentPage + 1;
      return (
        <Link to="/" key={element} className={className} onClick={() => setPage(nextPage)}>
          {element}
        </Link>
      );
    }
    if (element === ">>") {
      return (
        <Link to="/" key={element} className={className} onClick={() => setPage(pageCount)}>
          {element}
        </Link>
      );
    }

    const classList = `${className} ${element === currentPage ? "active" : ""}`;
    return (
      <Link to="/" key={element} className={classList} onClick={() => setPage(element)}>
        {element}
      </Link>
    );
  });
};
