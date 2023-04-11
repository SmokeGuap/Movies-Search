import movies from '../assets/movies.svg';
import Search from './Search';

function Header() {
  return (
    <header className='sticky top-0'>
      <nav className='bg-violet-400/25 py-5'>
        <div className='flex font-semibold justify-between items-center mx-auto max-w-screen-xl'>
          <div className='flex'>
            <img src={movies} className='mr-3 h-12' alt='Movies Search' />
            <span className='self-center text-xl text-white'>
              Movies Search
            </span>
          </div>
          <ul className='flex flex-row space-x-8 items-center w-1/2'>
            <li className='w-full'>
              <Search />
            </li>
            <li>
              <a href='#' className='block text-white'>
                History
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
