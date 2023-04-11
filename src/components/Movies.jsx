import Movie from './Movie';

function Movies({ movies }) {
  return (
    <div className='container mx-auto flex flex-wrap justify-center gap-6 py-5'>
      {movies.map((item) => {
        return <Movie key={item.id} movie={item} />;
      })}
    </div>
  );
}
export default Movies;
