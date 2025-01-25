import Movies from "../components/Movies";
import { useFavorites } from "../context/FavoritesContext";


function FavoritePage() {
    const { favorites } = useFavorites();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Mes films favoris</h1>

            {favorites.length > 0 ? (
                <Movies movies={favorites} />
            ) : (
                <p className="text-gray-500 text-center">Vous n'avez pas encore ajouté de films en favoris.</p>
            )}
        </div>
    );
}

export default FavoritePage;
