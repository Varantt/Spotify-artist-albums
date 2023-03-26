import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import SpotifyButton from "../Layout/SpotifyButton";

export default function Login() {
  return (
    <div className="flex flex-col h-screen  font-spotify ">
      <SpotifyButton />
    </div>
  );
}
