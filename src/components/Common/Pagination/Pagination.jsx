import { NavLink } from "react-router-dom";
import s from "./Pagination.module.css";

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

  return (
    <div className={s.pagination}>
      {uniqPagesArray(pagesArrayOrdered).map((el) => (
        <NavLink
          to={"/" + path + "/" + el + "/"}
          activeClassName={s.selected}
          key={el.toString()}
        >
          {el}
        </NavLink>
      ))}
    </div>
  );
};

export default Pagination;
