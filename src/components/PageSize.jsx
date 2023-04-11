function PageSize({ pageSize, changePageSize }) {
  return (
    <div className='text-end text-white'>
      <label htmlFor='size'>Page size:</label>
      <input
        id='size'
        className='ml-5 w-1/3 p-4 text-sm text-violet-500 rounded-lg focus:outline-none'
        type='number'
        min={1}
        value={pageSize}
        onChange={changePageSize}
      />
    </div>
  );
}
export default PageSize;
