import { useContext } from 'react';
import Movie from './Movie';
import { Context } from '../App';

function Movies() {
  const { currentTableData } = useContext(Context);

  return (
    <div className='container mx-auto flex flex-wrap justify-center gap-6 py-5'>
      {currentTableData.map((item) => {
        return <Movie key={item.id} movie={item} />;
      })}
    </div>
  );
}
export default Movies;
