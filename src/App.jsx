import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [pageSize, setPageSize] = useState(10);

  return (
    <div className='bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-600'>
      <Header
        pageSize={pageSize}
        changePageSize={(e) => setPageSize(e.target.value)}
      />
      <Main pageSize={pageSize} />
      <Footer />
    </div>
  );
}

export default App;
