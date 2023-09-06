
// src/components/Gif.jsx

import PropTypes from "prop-types";

export const Gif = ({title, url}) => {
  return (
    <div
      className="flex flex-col gap-2"
    >
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  )
}

// Set the prop types of Gif
Gif.propTypes = {
  title: PropTypes.string.isRequired,
}

