import search from '../assets/search.svg';

function Search() {
  return (
    <div className='relative w-full'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <img src={search} className='w-5 h-5' />
      </div>
      <input
        className='block w-full p-4 pl-10 text-sm text-violet-500 rounded-lg placeholder-violet-400 focus:outline-none'
        placeholder='Search'
      />
      <button className='text-white absolute right-2.5 bottom-2 rounded-lg text-sm px-4 py-2 bg-violet-600 hover:bg-violet-800 transition duration-400'>
        Search
      </button>
    </div>
  );
}
export default Search;
