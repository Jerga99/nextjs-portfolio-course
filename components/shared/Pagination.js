
import Pagination from "react-js-pagination";


const AppPagination = () => {

  return (
    <Pagination
      itemClass="page-item"
      linkClass="page-link"
      activePage={1}
      itemsCountPerPage={10}
      totalItemsCount={500}
      pageRangeDisplayed={10}
      onChange={() => {}}
    />
  )
}

export default AppPagination;
