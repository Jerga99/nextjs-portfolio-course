
import { useState } from 'react';
import Pagination from "react-js-pagination";


const AppPagination = () => {
  const [ activePage, setActivePage ] = useState(1);

  return (
    <Pagination
      itemClass="page-item"
      linkClass="page-link"
      activePage={activePage}
      itemsCountPerPage={10}
      totalItemsCount={500}
      pageRangeDisplayed={5}
      onChange={page => setActivePage(page)}
    />
  )
}

export default AppPagination;
