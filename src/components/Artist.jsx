import React from "react";
import { useParams } from "react-router-dom";
import useFetchAlbums from "../hooks/useFetchAlbums";
import Albums from "./Albums";

export default function Artist() {
  
  const { id } = useParams();

  let albumUrl = `https://api.spotify.com/v1/artists/${id}/albums`;
  let accessToken = localStorage.getItem("access_token");
  console.log(albumUrl, accessToken);
  useFetchAlbums(albumUrl, accessToken);

  console.log(id);
  // setArtistId(id);
  return (
    <div className="flex flex-col justify-center align-center  text-darkGrey ">
      
      <Albums />
    </div>
  );
}
