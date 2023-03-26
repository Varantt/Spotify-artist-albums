import React from "react";
import { useGlobalContext } from "../context/context";
import Album from "./Album";

export default function Albums() {
  const { artistAlbums } = useGlobalContext();
  console.log(artistAlbums);
  return (
    // loop around the albums and send the to the album component
    <div className="flex mt-20 mb-4 justify-center align-center">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
        {artistAlbums.map((artistAlbum) => {
          return <Album key={artistAlbum.id} {...artistAlbum} />;
        })}
      </div>
    </div>
  );
}
