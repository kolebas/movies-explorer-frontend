import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/movies" element={ <Movies />} />
        <Route path="/saved-movies" element={ <SavedMovies />} />
        <Route path="/profile" element={ <Profile />} />
        <Route path="/sign-in"  element={ <Login  /> } />
        <Route path="/sign-up" element={ <Register /> } />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
