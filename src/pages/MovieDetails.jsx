import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_KEY = 'YOUR_API_KEY'; // Replace with your TMDb API key
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ maxWidth: '300px', borderRadius: '8px', marginTop: '1rem' }}
      />
      <p style={{ marginTop: '1rem' }}>{movie.overview}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetails;
