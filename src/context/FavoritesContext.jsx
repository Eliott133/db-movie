import { createContext, useContext, useState } from "react";

// Création du contexte
const FavoritesContext = createContext();


// Fournisseur du contexte
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Ajouter un film aux favoris
    const addFavorite = (movie) => {
        if (!favorites.some((fav) => fav.title === movie.title)) {
            setFavorites([...favorites, movie]);
        }
    };

    // Retirer un film des favoris
    const removeFavorite = (title) => {
        setFavorites(favorites.filter((fav) => fav.title !== title));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    return useContext(FavoritesContext);
  };
