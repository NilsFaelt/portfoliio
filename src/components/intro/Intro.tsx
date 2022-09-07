import Styles from "./intro.module.css";
import reactLogo from "../../assets/react.svg";

const Intro = () => {
  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Hi my name is Nils! </h2>
        <p className={Styles.text}>
          Im a front end developer Specialized in React
        </p>
        <img className={Styles.logoReact} src={reactLogo} alt='' />
      </div>
    </div>
  );
};

export default Intro;
