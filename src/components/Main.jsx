import { useContext, useMemo } from 'react';
import { useState } from 'react';
import Movies from './Movies';
import Pagination from './Pagination';
import { Context } from '../App';

function Main() {
  const { movies, loading, setCurrentPage } = useContext(Context);

  return (
    <main className='text-white min-h-[calc(100vh-180px)] '>
      {movies.length != 0 ? (
        <>
          <Movies />
          <Pagination />
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
