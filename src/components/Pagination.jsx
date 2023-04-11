import { usePagination, DOTS } from '../hooks/usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

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
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <nav className='flex justify-center text-xl mt-5'>
      <ul className='list-style-none flex text-white'>
        {currentPage == 1 ? (
          <li className='rounded px-3 py-1.5'>Prev</li>
        ) : (
          <li
            className='cursor-pointer rounded px-3 py-1.5 hover:bg-violet-800'
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
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          }
          return (
            <li
              key={id}
              className='cursor-pointer rounded px-3 py-1.5 hover:bg-violet-800'
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
            className='cursor-pointer rounded px-3 py-1.5 hover:bg-violet-800'
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
