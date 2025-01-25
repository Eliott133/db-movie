import { truncate } from '../utils/String';
import Rating from './Rating';
import { Heart } from 'lucide-react';
import { useFavorites } from "../context/FavoritesContext";

function MovieCard({ movie }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = favorites.some((fav) => fav.title === movie.title);


    if (movie.description.trim() === "") {
        movie.description = "Aucune description disponible.";
    }

    const descriptionLength = movie.description.length;
    const translateYValue = descriptionLength > 100 ? '-translate-y-20' : '-translate-y-10';

    return (
        <div className="relative max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 relative group">

            <div className={`relative group-hover:${translateYValue} transition-transform duration-300 ease-in-out`}>
                <img
                    className={`w-full ${movie.poster ? (`object-cover`) : (`object-contain`)} h-[537px]`}
                    src={movie.poster ? `https://image.tmdb.org/t/p/w500${movie.poster}` : "/src/assets/no_image.svg"}
                    alt={movie.title}
                />
            </div>

            <div className={`p-4 group-hover:${translateYValue} transition-transform duration-300 ease-in-out`}>
                <h2 className="text-lg font-semibold text-gray-800">{movie.title}</h2>
                <Rating value={movie.rating / 2} color="yellow"/>
                <p className="text-sm text-gray-500 mt-1">Sortie en : {movie.release}</p>
            </div>

            <div className="absolute bottom-0 left-0 translate-y-full w-full text-gray-800 p-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-white max-h-[100px]">
                <p className="text-sm text-gray-800">{truncate(movie.description, 180)}
                    <a
                        href={`https://www.themoviedb.org/movie/${movie.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600"
                    >
                        En savoir plus
                    </a>
                </p>
            </div>

            <div 
            className="absolute top-0 right-0 rounded-full bg-white p-2 m-2 shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={() => (isFavorite ? removeFavorite(movie.title) : addFavorite(movie))}>
                <Heart className={`text-gray-500 hover:text-red-500 transition-colors duration-300 cursor-pointer`} size={25} color={`${isFavorite ? `red` : `gray`}`}/>
            </div>

        </div>
    );
}

export default MovieCard;
