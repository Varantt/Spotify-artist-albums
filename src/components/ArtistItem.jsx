import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../Layout/StarRating";
import defaultImg from "../assets/default.jpg";

export default function ArtistItem({
  id,
  name,
  followers,
  images,
  popularity,
}) {


  const image = images[1] && images[1].url;
  return (
    <div key={id} className="border border-lightGrey w-60 md:h-[380px] ">
      <img
        className="h-64 w-64"
        src={image ? image : defaultImg}
        alt="Artist image"
      />
      <div className=" flex flex-col border-t-2 border-lightGrey ">
        <p className="flex justify-start text-lg font-semibold text-darkGrey ml-2 mt-3">
          <Link to={`/artist_search/${id}/albums`}>{name}</Link>
        </p>
        <p className="text-xs text-lightGrey ml-2">{`${followers.total.toLocaleString()} followers`}</p>
        <span className="flex ml-2 mt-9 ">
          {/* start */}
          <StarRating popularity = {popularity}/>
          {/* {} */}
        </span>
      </div>
    </div>
  );
}
