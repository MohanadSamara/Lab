import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Movies() {


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = 'YOUR_API_KEY'; // Replace with your TMDb API key
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0ac2914b7a8bfa710b460c33b44aa70c`);
      setMovies(res.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Popular Movies</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'black' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;
