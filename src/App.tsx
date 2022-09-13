import { useState } from "react";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import NavBar from "./components/navBar/NavBar";
import Project from "./components/projectModule/Project";
import furrency from "./assets/img/Furrency.png";
import theDorker from "./assets/img/TheDorker.png";
import Bbanshee from "./assets/img/Banshee.png";
import Videos from "./components/vidoes/Videos";

function App() {
  const [toogleAbouteMe, setToogleAbouteMe] = useState<boolean>(true);
  const [toogleProjects, setToogleProjects] = useState<boolean>(false);
  const [toogleVideos, setToogleVideos] = useState<boolean>(false);

  return (
    <div className='App'>
      <NavBar
        setToogleAbouteMe={setToogleAbouteMe}
        setToogleProjects={setToogleProjects}
        setToogleVideos={setToogleVideos}
      />
      {toogleAbouteMe ? <AboutMe /> : null}
      {toogleProjects ? (
        <Project
          githubLink={"https://github.com/NilsFaelt/Furrency"}
          furrency={furrency}
          link={"https://cheery-kleicha-7c214f.netlify.app/"}
          title={"Furrency"}
          info={
            "This is a fictional currency exchange, were you can create your own travel insuarnce or exchange currency. The site is currently under construction, but please try it out anyway. The styleing of the page is written in vanilla css but with the buttons from material-ui."
          }
          workedWith={[
            "Javascriot",
            "Typescript",
            "React",
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
          githubLink={"https://github.com/NilsFaelt/the_new_dorker"}
          furrency={theDorker}
          link={"https://melodious-speculoos-2fc810.netlify.app/"}
          title={"The New Dorker"}
          info={`This is a fictional news site, the purpose is tom mimic sites as the-new-york-times or the daily mail. All the annoying pop-ups is made with purpose to make it feel like a free news-site filled with commericial. You need to create a account to be able to use site, once its setup you can login whenever you want. The styleing is written in vanilla css. `}
          workedWith={[
            "Javascriot",
            "Typescript",
            "React",
            "Axios",
            "HeroIcons",
            "Material-ui",
            "Firebase",
            "Email-js",
          ]}
        />
      ) : null}
      {toogleProjects ? (
        <Project
          githubLink={"https://github.com/NilsFaelt/banshee"}
          furrency={Bbanshee}
          link={"https://celadon-florentine-4ddc9c.netlify.app/"}
          title={"Banshee"}
          info={`Dont ask!! this site is just me playing around with whatever i felt like at the moment. Its currently paused due to lack of inspiration, but when i feel like playing around again i will probably get back there. The styleing is written in vanilla css. Try to send a mail on the site, and use the burger menu, its pretty neet.`}
          workedWith={[
            "Javascript",
            "React",
            "Axios",
            "HeroIcons",
            "Firebase",
            "Css",
          ]}
        />
      ) : null}
      {toogleVideos ? <Videos /> : null}
    </div>
  );
}

export default App;
