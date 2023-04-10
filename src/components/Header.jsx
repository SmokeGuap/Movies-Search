import movies from '../assets/movies.svg';

function Header() {
  return (
    <header className='sticky top-0'>
      <nav className='bg-blue-500 py-5'>
        <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
          <div className='flex'>
            <img src={movies} className='mr-3 h-12' alt='Movies Search' />
            <span className='self-center text-xl font-semibold text-white'>
              Movies Search
            </span>
          </div>
          <ul className='flex flex-row space-x-8'>
            <li>
              <a href='#' className='block text-white'>
                Search
              </a>
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
