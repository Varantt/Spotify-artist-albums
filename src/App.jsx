import "./index.css";
import Login from "./components/Login";
import ArtistSearch from "./components/ArtistSearch";
import Artist from "./components/Artist";
import Header from "./Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/artist_search" element={<ArtistSearch />}></Route>
        <Route path='/artist_search/:id/albums' element = {<Artist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
