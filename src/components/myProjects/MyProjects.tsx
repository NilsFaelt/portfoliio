import Styles from "./myProjects.module.css";

const MyProjects = () => {
  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Apps ive built</h3>
      <div className={Styles.projectsContainer}></div>
    </div>
  );
};

export default MyProjects;
