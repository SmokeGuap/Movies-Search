import { useContext } from 'react';
import { usePagination, DOTS } from '../hooks/usePagination';
import { Context } from '../App';

const Pagination = () => {
  const { pageSize, currentPage, setCurrentPage, movies } = useContext(Context);
  const totalCount = movies.length;
  const siblingCount = 1;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <nav className='flex justify-center text-xl my-5 '>
      <ul className='list-style-none flex text-white'>
        {currentPage == 1 ? (
          <li className='rounded px-3 py-1.5'>Prev</li>
        ) : (
          <li
            className='cursor-pointer rounded px-3 py-1.5 hover:bg-violet-800 transition duration-400'
            onClick={onPrevious}
          >
            Prev
          </li>
        )}
        {paginationRange.map((pageNumber, id) => {
          if (pageNumber === DOTS) {
            return (
              <li key={id} className='px-3 py-1.5'>
                &#8230;
              </li>
            );
          }
          if (currentPage == pageNumber) {
            return (
              <li
                key={id}
                className='cursor-pointer rounded bg-violet-400 px-3 py-1.5'
              >
                {pageNumber}
              </li>
            );
          }
          return (
            <li
              key={id}
              className='cursor-pointer rounded px-3 py-1.5 hover:bg-violet-800 transition duration-400'
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {currentPage == Math.ceil(totalCount / pageSize) ? (
          <li className='rounded px-3 py-1.5'>Next</li>
        ) : (
          <li
            className='cursor-pointer rounded px-3 py-1.5 hover:bg-violet-800 transition duration-400'
            onClick={onNext}
          >
            Next
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
