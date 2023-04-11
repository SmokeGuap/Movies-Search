import { useEffect } from 'react';
import { useState } from 'react';
import Movies from './Movies';
import image from '../assets/image.jpg';

function Main() {
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
  ]);
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
    <main className='text-black min-h-[calc(100vh-176px)] '>
      <Movies movies={movies} />
    </main>
  );
}
export default Main;
