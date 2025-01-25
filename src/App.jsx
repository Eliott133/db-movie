import HomePage from './routes/HomePage';
import FavoritePage from './routes/FavoritePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
    return (
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    );
}

export default App;
