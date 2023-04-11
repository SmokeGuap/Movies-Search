function Movie({ movie }) {
  return (
    // <div>
    //   <ul>
    //     <li>{movie.image}</li>
    //     <li>{movie.title}</li>
    //     <li>{movie.description}</li>
    //   </ul>
    // </div>
    <div className='rounded-lg bg-violet-400'>
      <img className='rounded-t-lg' src={movie.image} alt={movie.title} />
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold text-white'>{movie.title}</h5>
        <p className='mb-3 text-white'>{movie.description}</p>
        <a
          href='#'
          className='px-3 py-2 text-sm font-medium text-white rounded-lg bg-violet-600 hover:bg-violet-800 '
        >
          Read more
        </a>
      </div>
    </div>
  );
}
export default Movie;
