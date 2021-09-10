import { NavLink } from "react-router-dom";

const Pagination = ({ currentPage, path, pagesCount, ...props }) => {
  const actualPagesCount = pagesCount >= 250 ? 250 : pagesCount;
  const currentPageNumber = Number(currentPage);
  const pagesArray = [
    1,
    actualPagesCount,
    currentPageNumber - 1,
    currentPageNumber,
    currentPageNumber + 1,
  ];

  const pagesArrayOrdered = pagesArray.sort((a, b) => a - b);

  const uniqPagesArray = (el) =>
    [...new Set(el)].filter((el) => el > 0 && el <= actualPagesCount);

  console.log("pagesArrayOrdered", pagesArrayOrdered);
  console.log("path", path);

  return (
    <div className="pagination">
      {uniqPagesArray(pagesArrayOrdered).map((el) => (
        <NavLink to={"/" + path + "/" + el + "/"} activeClassName="selected">
          {el}
        </NavLink>
      ))}
    </div>
  );
};

export default Pagination;
