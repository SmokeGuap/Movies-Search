import { useContext } from 'react';
import { Context } from '../App';

function PageSize() {
  const { pageSize, setPageSize } = useContext(Context);

  return (
    <div className='flex text-end text-white'>
      <label htmlFor='size' className='ml-2 self-center w-1/2'>
        Page size:
      </label>
      <input
        id='size'
        className='ml-2 sm:ml-2 w-1/3 md:w-2/3 lg:w-1/3 text-center py-4 sm:p-4 text-sm text-violet-500 rounded-lg focus:outline-none'
        type='number'
        min={1}
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value)}
      />
    </div>
  );
}
export default PageSize;
