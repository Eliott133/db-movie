import React from 'react';
import MovieCard from './MovieCard';
import { Loader, AlertCircle, Info } from 'lucide-react';

function Movies({ movies, loading, error, query, nb_result }) {

    const defaultMessage = "Films à l'affiche";

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">{query.trim() ? (`${nb_result} résultat pour la recherche ${query}`) : defaultMessage}</h1>
            {loading ? (
                <div className="flex items-center justify-center">
                    <Loader className="animate-spin w-6 h-6 mr-2"/>
                    <p className="text-gray-500">Chargement des films...</p>
                </div>
            ) : error ? (
                <div className="flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 mr-2"/>
                    <p className="text-red-500">Une erreur est survenue lors de la récupération des films.</p>
                </div>
            ) : movies.length === 0 ? (
                <div className="flex items-center justify-center">
                    <Info className="w-6 h-6 mr-2"/>
                    <p className="text-gray-500">Aucun film trouvé. Essayez une autre recherche.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Movies;
