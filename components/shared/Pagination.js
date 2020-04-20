
import { useState } from 'react';
import Pagination from "react-js-pagination";


const AppPagination = ({count, pageSize}) => {
  const [ activePage, setActivePage ] = useState(1);

  return (
    <Pagination
      itemClass="page-item"
      linkClass="page-link"
      activePage={activePage}
      itemsCountPerPage={pageSize}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      onChange={page => setActivePage(page)}
    />
  )
}

export default AppPagination;
