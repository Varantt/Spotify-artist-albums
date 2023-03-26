import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import useFetch from "../hooks/useFetch";
import ArtistItem from "./ArtistItem";

export default function ArtistItems() {
  const { artists, searchUrl } = useGlobalContext();

  useFetch(searchUrl, localStorage.getItem("access_token"));

  return (
    <div className="flex justify-center align-center md:-mt-20 md:mx-10 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  md:gap-10">
        {artists.length > 0 &&
          artists.map((artist) => {
            console.log(artist);
            return <ArtistItem key={artist.id} {...artist} />;
          })}
      </div>
    </div>
  );
}
