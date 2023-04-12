import movies from '../assets/movies.svg';
import PageSize from './PageSize';
import Search from './Search';

function Header({ pageSize, changePageSize }) {
  return (
    <header className='sticky top-0'>
      <nav className='bg-violet-400/25 p-5'>
        <div className='flex flex-col sm:flex-row font-semibold justify-between items-center mx-auto max-w-screen-xl'>
          <div className='flex'>
            <img src={movies} className='mr-3 h-12' alt='Movies Search' />
            <span className='self-center text-xl text-white'>
              Movies Search
            </span>
          </div>
          <ul className='flex flex-row items-center md:w-1/2'>
            <li className='w-full min-w-max'>
              <Search />
            </li>
            <li className=''>
              <PageSize pageSize={pageSize} changePageSize={changePageSize} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
