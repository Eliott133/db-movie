# Movie App

![Aperçu de l'application](https://raw.githubusercontent.com/Eliott133/db-movie/refs/heads/main/src/screen/screely-1737775719337.png)  

## Description
Movie App is a React application that lets you search for movies, add them to a list of favorites and display them. It uses The Movie Database (TMDb) API to search and display movies, and React Context to manage the status of favorite movies.

## Features
- Movie search: Search for movies by title.
- Popular films: Displays a list of popular films when the page loads.
- Favorites: Add movies to a list of favorites and view them on a dedicated page.
- Responsive: The application is responsive and adapts to different screen sizes.

## Prerequisites
Before you start, make sure you have the following items installed on your machine:
- Node.js (version 14 or higher)
- npm ou yarn

## Installation 

1. Clone the project :
```bash
https://github.com/Eliott133/db-movie.git
```

2. Install dependencies :
```bash
cd db-movie
npm install
```

3. Start the development server :

```bash
npm run dev
```

6. Open your browser at the following address :
   ```
   http://localhost:5173/
   ```

## Usage
### Movie search
On the home page, you can enter a film title in the search bar to display a list of films matching your search.

### Add to favorites
By clicking on the heart icon on a film, you can add it to your list of favorites. You can view your favorite movies by navigating to the Favorites page.

### Delete favorites
On the Favorites page, you can delete a film from your list by clicking on the delete icon next to the film.

## Routes

- **/** : render HomePage component
- **/favorites** : render FavoritePage component

## Project structure

- **components** : Composants réutilisables (Movies, Search, etc.)
    - **MovieCard** : Component representing an individual film card, with title, poster and description
    - **Movies** : Component displays movie list, supports display of popular movies, search and error handling
    - **Pagination** : Component for navigating between results pages
    - **Rating** : Star rating display component for a film
    - **Search** : Component for managing movie searches, including a search bar
- **context** : Context for managing favorites
- **routes** : Page components
- **App.jsx** : Main application component

## Technologies used
- React: JavaScript library for building the user interface. 
- React Router: To manage navigation between the application's pages.
- TMDb API: API used to retrieve movie data.
- React Context: To manage the status of bookmarks throughout the application.