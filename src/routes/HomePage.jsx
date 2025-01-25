import React, { useState, useEffect } from 'react';
import Movies from './../components/Movies';
import Search from './../components/Search';
import Pagination from './../components/Pagination';

function HomePage() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [nb_result, setNbResult] = useState(0);

    const API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGQ5MWRmNDJmM2EyYmNmZDcxYTBkYmJhMGQ4MjE1NiIsIm5iZiI6MTczNzczMzc5OC4xMjMwMDAxLCJzdWIiOiI2NzkzYjZhNjQ0ZWYzOWM4NjAxODVlOTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ILmCiI8v_KxXwHYUcrA6DfdqhTDnhJ5Js_tS4-DoDV0'
        }
    };

    const handleChange = (query) => {
        setSearch(query);
        setCurrentPage(1); // Réinitialiser à la première page lors d'une nouvelle recherche
    };

    const fetchMovies = async (page = 1) => {
        try {
            setLoading(true);
            const endpoint = search.trim()
                ? `https://api.themoviedb.org/3/search/movie?language=fr-FR&page=${page}&query=${search}`
                : `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=${page}`;

            const response = await fetch(endpoint, API_OPTIONS);
            const data = await response.json();

            const formattedMovies = data.results.map((movie) => ({
                title: movie.title,
                rating: movie.vote_average,
                release: movie.release_date?.split('-')[0],
                poster: movie.poster_path,
                description: movie.overview,
                id: movie.id
            }));
            setMovies(formattedMovies);
            setTotalPages(data.total_pages);
            setNbResult(data.total_results);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [search, currentPage]); // Appeler lorsque la recherche ou la page actuelle change

    return (
        <>
            <Search onSearchChange={handleChange} />
            <Movies movies={movies} loading={loading} error={error} query={search} nb_result={nb_result} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    );
}

export default HomePage;