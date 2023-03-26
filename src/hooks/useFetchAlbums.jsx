import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
// fetch for albums
const useFetchAlbums = (url, accessToken) => {
  const { artistAlbums, setArtistAlbums } = useGlobalContext();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setArtistAlbums(data.items);

      console.log(artistAlbums);
    };

    fetchItems();
  }, [url, accessToken, setArtistAlbums]);

  return null;
};

export default useFetchAlbums;
