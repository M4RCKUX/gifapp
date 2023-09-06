
// src/components/Grid.jsx

import {useEffect, useState} from "react";
import {getGifs} from "../helpers";
import PropTypes from "prop-types";
import {Gif} from "./Gif.jsx";

export const Grid = ({category}) => {

  const [gifs, setGifs] = useState([]);

  useEffect(() =>{
    getGifs(category).then(setGifs);
  }, [category]);

  return (
    <div
      className="flex flex-col gap-2"
    >
      <h3
        className="text-2xl font-bold"
      > {category && `${category} GIFS`}
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4"
      >
        {gifs.map(gif => (
          <Gif key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  )
}

// Set the prop types of Grid
Grid.propTypes = {
  category: PropTypes.string.isRequired
}


