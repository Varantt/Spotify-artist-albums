import React from "react";
import spotifyLogo from "../assets/spotify.png";
import { useGlobalContext } from "../context/context";

export default function SpotifyButton() {
  const { handleLogin } = useGlobalContext();

  return (
    <div className="flex flex-1 justify-center items-center ">
      <button
        className="flex justify-center items-center gap-4 bg-white w-96 border border-lightGrey text-2xl rounded-xl text-darkGrey "
        onClick={handleLogin}
      >
        <span className=" flex-1 ml-16 text-center">Login</span>
        <img className="w-16 h-16 " src={spotifyLogo} alt="Spotify logo" />
      </button>
    </div>
  );
}
