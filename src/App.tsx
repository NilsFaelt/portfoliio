import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import NavBar from "./components/navBar/NavBar";
import Project from "./components/projectModule/Project";
import furrency from "./assets/img/Furrency.png";
import theDorker from "./assets/img/TheDorker.png";

function App() {
  const [toogleAbouteMe, setToogleAbouteMe] = useState<boolean>(true);
  const [toogleProjects, setToogleProjects] = useState<boolean>(false);

  return (
    <div className='App'>
      <NavBar
        setToogleAbouteMe={setToogleAbouteMe}
        setToogleProjects={setToogleProjects}
      />
      {toogleAbouteMe ? <AboutMe /> : null}
      {toogleProjects ? (
        <Project
          furrency={furrency}
          link={"https://cheery-kleicha-7c214f.netlify.app/"}
          title={"Furrency"}
          info={"This is a fictional currency exchange:"}
          workedWith={[
            "Javascriot",
            "Typescript",
            "Redux",
            "Axios",
            "HeroIcons",
            "Material-ui",
            "UUID",
          ]}
        />
      ) : null}
      {toogleProjects ? (
        <Project
          furrency={theDorker}
          link={"https://melodious-speculoos-2fc810.netlify.app/"}
          title={"The New Dorker"}
          info={
            "This is a fictional news site, the purpose is tom mimic the-new-york-time/the daily mail ish."
          }
          workedWith={[
            "Javascriot",
            "Typescript",
            "Axios",
            "HeroIcons",
            "Material-ui",
          ]}
        />
      ) : null}
    </div>
  );
}

export default App;
