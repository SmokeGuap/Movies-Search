import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { createContext, useMemo, useState } from 'react';

export const Context = createContext();

function App() {
  const [pageSize, setPageSize] = useState(10);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return movies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, movies]);

  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        loading,
        setLoading,
        pageSize,
        setPageSize,
        currentTableData,
        currentPage,
        setCurrentPage,
      }}
    >
      <div className='bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-600'>
        <Header />
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
