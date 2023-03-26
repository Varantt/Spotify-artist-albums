import React from "react";
import { useGlobalContext } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function StarRating({popularity}) {
  const { handleRating } = useGlobalContext();

  return (
    <>
      {[1, 2, 3, 4, 5].map((value) => {
        let rating = handleRating(popularity);
        return (
          <FontAwesomeIcon
            key={value}
            icon={faStar}
            color={value <= rating ? "gold" : "lightGray"}
          />
        );
      })}
    </>
  );
}
