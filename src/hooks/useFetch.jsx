import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
// fetch for search
const useFetch = (url, accessToken) => {
  const { artists, setArtists, searchValue } = useGlobalContext();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setArtists(data.artists.items);
      console.log(artists);
      console.log(data);
    };

    if (searchValue) {
      fetchItems();
    }
  }, [url, accessToken, setArtists, searchValue]);

  return null;
};

export default useFetch;
