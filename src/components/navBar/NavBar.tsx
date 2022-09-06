import Styles from "./navBar.module.css";

interface Props {
  setToogleAbouteMe: (toogle: boolean) => void;
  setToogleProjects: (toogle: boolean) => void;
}

const NavBar: React.FC<Props> = ({ setToogleAbouteMe, setToogleProjects }) => {
  const aboutMeToogle = () => {
    setToogleAbouteMe(true);
    setToogleProjects(false);
  };
  const projectsToogle = () => {
    setToogleAbouteMe(false);
    setToogleProjects(true);
  };
  return (
    <nav className={Styles.container}>
      <ul className={Styles.ul}>
        <li onClick={() => aboutMeToogle()} className={Styles.li}>
          About me
        </li>
        <li onClick={() => projectsToogle()} className={Styles.li}>
          Projects
        </li>
        <a href='mailto:nilsfaelt@gmail.com' className={Styles.li}>
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
