import "./App.css";
import Header from "./Header";
import React, { useState } from "react";
import Nav from "./Nav";
import Results from "./Results";
import Requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(Requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
