import './Pagination.css';

const Pagination = ({ totalProjects, projectsPerPage, currentPage, setCurrentPage }) => {
  let Pages = [];

  for (let i=1; i<= Math.ceil( totalProjects/projectsPerPage ) ;i++) {
    Pages.push(i);
  }
  
  return (
    <div className='app__pagination'>
        {Pages.map((page, index) => {
          return (
            <button
              key={page} 
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? 'active': ''}
            >Tab {page}</button>
          )
        })}
    </div>
  )
}

export default Pagination;