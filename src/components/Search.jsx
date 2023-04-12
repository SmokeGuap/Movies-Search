import { useContext, useState } from 'react';
import searchSVG from '../assets/search.svg';
import { Context } from '../App';

function Search() {
  const [search, setSearch] = useState('');
  const { setMovies, setLoading } = useContext(Context);

  const handleSearch = async () => {
    setLoading(true);
    const res = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/k_t5ttnx54/${search}`
    );
    const result = await res.json();
    setLoading(false);
    setMovies(result.results);
  };

  return (
    <div className='relative w-full'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <img src={searchSVG} className='w-5 h-5' />
      </div>
      <input
        value={search}
        className='block w-full p-4 pl-10 text-sm text-violet-500 rounded-lg placeholder-violet-400 focus:outline-none'
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className='text-white absolute right-2.5 bottom-2 rounded-lg text-sm px-4 py-2 bg-violet-600 hover:bg-violet-800 transition duration-400'
      >
        Search
      </button>
    </div>
  );
}
export default Search;
