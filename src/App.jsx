import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
  const [pageSize, setPageSize] = useState(10);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{ movies, setMovies, loading, setLoading, pageSize, setPageSize }}
    >
      <div className='bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-600'>
        <Header />
        <Main pageSize={pageSize} />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
