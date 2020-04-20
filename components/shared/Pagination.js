

import Pagination from "react-js-pagination";


const AppPagination = ({count, pageSize, pageNum, onPageChange}) => {
  return (
    <Pagination
      itemClass="page-item"
      linkClass="page-link"
      activePage={pageNum}
      itemsCountPerPage={pageSize}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      onChange={page => onPageChange(page, pageSize)}
    />
  )
}

export default AppPagination;
