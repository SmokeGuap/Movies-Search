import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import Movies from './Movies';
import image from '../assets/image.jpg';
import Pagination from './Pagination';

function Main({ pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([
    {
      id: 1,
      description: 'Testdsfgsdfgsdfgsdfgsdfgdsfgdfg',
      image: image,
      title: 'TitleTest',
    },
    {
      id: 2,
      description: 'Test2dfgsdfgsdfgsdfgsdfgdsfg',
      image: image,
      title: 'TitleTest2',
    },
    {
      id: 3,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 4,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 5,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 6,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 7,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 8,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 9,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 10,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
    {
      id: 11,
      description: 'Test3dfgsdfgdsfgdfgsgsdfdfgfdg',
      image: image,
      title: 'TitleTest3',
    },
  ]);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return movies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  // useEffect(() => {
  //   fetch('https://imdb-api.com/en/API/SearchMovie/k_t5ttnx54/matrix')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.results != []) {
  //         setMovies(res.results);
  //       } else {
  //         console.log(res.errorMessage);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <main className='text-black min-h-[calc(100vh-180px)] '>
      <Movies movies={currentTableData} />
      <Pagination
        currentPage={currentPage}
        totalCount={movies.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}
export default Main;
