import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import NavBar from "./components/navBar/NavBar";

function App() {
  const [toogleAbouteMe, setToogleAbouteMe] = useState<boolean>(true);

  return (
    <div className='App'>
      <NavBar setToogleAbouteMe={setToogleAbouteMe} />
      <AboutMe />
    </div>
  );
}

export default App;
