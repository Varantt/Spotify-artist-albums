import React from "react";

export default function Album({
  id,
  images,
  external_urls,
  name,
  artists,
  release_date,
  total_tracks,
}) {
  const img = images[1].url;

  return (
    <div key={id} className="flex flex-col border border-lightGrey w-64 h-full">
      <img src={img} alt="Album cover" className="h-56 flex-grow " />
      <div className="flex flex-col border-t border-lightGrey">
        <p className="flex justify-start text-xl text-darkGrey font-semibold ml-4 mt-4">
          {name}
        </p>
        <p>
          {artists.map((artist) => {
            return (
              <span
                key={artist.id}
                className="text-xs text-lightGrey  ml-4"
              >{`${artist.name} `}</span>
            );
          })}
        </p>

        <div id="bottom-items" className="flex flex-col justify-end mt-8  ">
          <p className="flex justify-start text-xs gray  font-semibold ml-4 ">
            {release_date}
          </p>
          <p className="flex justify-start text-xs gray  font-semibold ml-4 mb-2">
            {total_tracks} {total_tracks < 2 ? "track" : "tracks"}
          </p>
          <button className="p-2 bg-lighterGray gray text-sm border-t border-lightGrey  ">
            <a href={external_urls.spotify} target="_blank">
              Preview on Spotify
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
