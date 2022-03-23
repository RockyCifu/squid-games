import React from "react";

import { Link, NavLink } from "react-router-dom";

export const SquidPaginationList = (props) => {
  const { numPages, currentPage } = props;

  const previousPage = currentPage - 1 > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1 > numPages ? numPages : currentPage + 1;

  const pageLinks = [...Array(numPages)].map((element, index) => {
    const current = index + 1;
    return (
      <li key={current} className="pagination-list__link">
        <NavLink to={`/squids/pages/${current}`} activeClassName="active">
          {current}
        </NavLink>
      </li>
    );
  });

  return (
    <ul className="pagination-list">
      <li className="pagination-list__link">
        <Link to="/squids/pages/1">{"<<"}</Link>
      </li>
      <li className="pagination-list__link">
        <Link to={`/squids/pages/${previousPage}`}>{"<"}</Link>
      </li>
      {pageLinks}
      <li className="pagination-list__link">
        <Link to={`/squids/pages/${nextPage}`}>{">"}</Link>
      </li>
      <li className="pagination-list__link">
        <Link to={`/squids/pages/${numPages}`}>{">>"}</Link>
      </li>
    </ul>
  );
};
