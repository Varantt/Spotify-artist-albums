import { createContext, useContext, useState } from "react";

let AppContext = createContext();

export const ProviderContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);

  const url = "https://accounts.spotify.com/authorize";
  const CLIENT_ID = "55dbb019184640c2a7077409d661a92b";
  const REDIRECT_URI = "http://127.0.0.1:5173/artist_search";

  let searchUrl = `https://api.spotify.com/v1/search?q=${searchValue}&type=artist`;

  const handleLogin = () => {
    const AUTH_URL = `${url}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=user-read-private%20user-read-email`;
    window.open(AUTH_URL, "_self");

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearch = (e) => {
    e.target.focus();
    setSearchValue(e.target.value);

    console.log(searchValue);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      setArtists([]);
    } else {
      setSearchValue(searchValue);
    }
  };

  const handleRating = (popularity) => {
    let rating = 1;

    if (popularity > 25 && popularity <= 40) {
      rating = 2;
    } else if (popularity > 40 && popularity <= 60) {
      rating = 3;
    } else if (popularity > 60 && popularity < 85) {
      rating = 4;
    } else if (popularity >= 85) {
      rating = 5;
    }

    return rating;
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        handleLogin,
        handleLogout,
        handleSearch,
        artists,
        setArtists,
        searchValue,
        setSearchValue,
        searchUrl,
        handleRating,
        onSearchSubmit,
        artistAlbums,
        setArtistAlbums,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  let context = useContext(AppContext);
  return context;
};
