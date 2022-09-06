import Styles from "./navBar.module.css";

interface Props {
  setToogleAbouteMe: (toogle: boolean) => void;
}

const NavBar: React.FC<Props> = ({ setToogleAbouteMe }) => {
  const aboutMeToogle = () => {
    setToogleAbouteMe(false);
  };
  return (
    <nav className={Styles.container}>
      <ul className={Styles.ul}>
        <li onClick={() => aboutMeToogle()} className={Styles.li}>
          About me
        </li>
        <li className={Styles.li}>Projects</li>
        <a href='mailto:nilsfaelt@gmail.com' className={Styles.li}>
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
