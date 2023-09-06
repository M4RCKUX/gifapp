
// src/components/Input.jsx

import {useState} from "react";
import PropTypes from "prop-types";

export const Input = ({setCategory}) => {

  const [inputValue, setInputValue] = useState('');
  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const trimmedInputValue = inputValue.trim();

    if(trimmedInputValue.length > 0)
      setCategory(inputValue);
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <div
        className="flex flex-col gap-2"
      >
        <label
          htmlFor="category"
          className="font-bold"
        >
          Category
        </label>
        <div
          className="flex flex-col md:flex-row gap-2"
        >
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-2 flex-grow"
            value={inputValue}
            onChange={onChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Go!
          </button>
        </div>
      </div>
    </form>
  )
}

// Set the prop types of Input
Input.propTypes = {
  setCategory: PropTypes.func.isRequired
}

