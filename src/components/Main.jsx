import { useContext, useMemo } from 'react';
import { useState } from 'react';
import Movies from './Movies';
import image from '../assets/image.jpg';
import Pagination from './Pagination';
import { Context } from '../App';

function Main({ pageSize }) {
  const { movies, loading } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return movies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, movies]);

  return (
    <main className='text-white min-h-[calc(100vh-180px)] '>
      {movies.length != 0 ? (
        <>
          <Movies movies={currentTableData} />
          <Pagination
            currentPage={currentPage}
            totalCount={movies.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : loading ? (
        <div className='font-medium w-screen text-center pt-20'>Loading...</div>
      ) : (
        <div className='font-medium w-screen text-center pt-20'>
          No movies, enter movie name
        </div>
      )}
    </main>
  );
}
export default Main;
