import "./App.css";
import Menu from "./Components/Menu";
import Details from "./Components/Details";
import axios from "axios";
import { useState, useEffect } from "react";
const API_URL = "https://api.tvmaze.com/search/shows?q=all";
function App() {
  const [view, setview] = useState(true);

  const handleClose = () => setview(true);
  const [movie, setmovie] = useState([])
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setmovies(res.data))
      .catch((err) => console.log(err));
  }, [movies, view]);
  return (
    <div className="container">
      {view ? (
        <div className="grid">
          {movies.map((e) => (
            <Menu key={e.show.id} show={e.show} View={view} setview={setview} setmovie={setmovie}/>
          ))}
        </div>
      ) : (
        <Details View={view} handleClose={handleClose} movie={movie}/>
      )}
    </div>
  );
}

export default App;
