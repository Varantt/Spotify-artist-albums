import React, { useEffect } from "react";
import ArtistItems from "./ArtistItems";
import SearchForm from "../Layout/SearchForm";
//http://127.0.0.1:5173/artist_search#access_token=BQBuIYFn8DAfc78AtwzDig-1t95eJhad1ty1YSnSAwCVVd3bH9GC1me3OSuwuHJQiMCakJdU6VIANrGSOhfOeHh4QukzDfiUEz9BAYInJp0ZouexiBbDSXdiGtTRiFoHcqo16YO-EsBSDAgTydZeQrcetA2erIu0ypb_LXm-ta0bLhZ_AKRwP4vpsKP2S9fZFbElnrMgM-0KQfkLBE5z&token_type=Bearer&expires_in=3600
export default function ArtistSearch() {
  useEffect(() => {
    const params = window.location.hash.substring(1);
    console.log(params);
    const accessToken = params
      .split("&")
      .reduce((accumulator, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        if (key === "access_token") {
          return value;
        }

        return accumulator;
      }, {});

    console.log(accessToken);

    localStorage.clear();
    localStorage.setItem("access_token", accessToken);
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen  md:min-h-screen items-center justify-center font-spotify">
        <SearchForm />
      </div>

      <ArtistItems />
    </>
  );
}
