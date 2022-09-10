import Styles from "./navBar.module.css";

interface Props {
  setToogleAbouteMe: (toogle: boolean) => void;
  setToogleProjects: (toogle: boolean) => void;
  setToogleVideos: (toogle: boolean) => void;
}

const NavBar: React.FC<Props> = ({
  setToogleAbouteMe,
  setToogleProjects,
  setToogleVideos,
}) => {
  const aboutMeToogle = () => {
    setToogleVideos(false);
    setToogleAbouteMe(true);
    setToogleProjects(false);
  };
  const projectsToogle = () => {
    setToogleVideos(false);
    setToogleAbouteMe(false);
    setToogleProjects(true);
  };
  const videosToogle = () => {
    setToogleVideos(true);
    setToogleAbouteMe(false);
    setToogleProjects(false);
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
        <li onClick={() => videosToogle()} className={Styles.li}>
          Css And Design
        </li>
        <a
          href='mailto:nils.faelt@gmail.com?&body=Hello please send me a mail and i get back to you as soon as posible, please feel free to call if urgent: 0760768660'
          className={Styles.li}
        >
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
