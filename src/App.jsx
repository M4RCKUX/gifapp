
// src/App.jsx

import './App.css'
import {Input} from "./components/Input.jsx";
import {Grid} from "./components/Grid.jsx";
import {useState} from "react";

function App() {

  const [category, setCategory] = useState('');

  return (
    <div
      className="container px-2 md:px-20"
    >
      <h1
        className="text-center p-3 text-2xl font-bold"
      >
        GifExpertApp
      </h1>
      <Input setCategory={setCategory} />
      <Grid category={category} />
    </div>
  )
}

export default App
