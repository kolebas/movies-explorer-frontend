import "./Movies.css";
import SearchFrom from "../SearchFrom/SearchFrom";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => (
  <div>
    <SearchFrom />
    <Preloader />
    <MoviesCardList />
  </div>
)

export default Movies