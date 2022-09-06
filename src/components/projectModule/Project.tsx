import Styles from "./project.module.css";

interface Props {
  furrency: string;
  link: string;
  title: string;
  workedWith: string[];
  info: string;
}

const Project: React.FC<Props> = ({
  furrency,
  link,
  title,
  workedWith,
  info,
}) => {
  console.log(furrency);
  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>{title}</h3>
      <a target='_blank' href={link}>
        <img className={Styles.img} src={furrency} alt='' />
      </a>
      <a target='_blank' href={link}>
        <div className={Styles.infoDiv}>
          <h4 className={Styles.infoTitle}>Info:</h4>
          <p className={Styles.text}>{info}</p>
        </div>
        <div className={Styles.infoDivTools}>
          <h4 className={Styles.infoTitle}>Tools:</h4>
          {workedWith?.map((text) => (
            <p className={Styles.text}>{text}</p>
          ))}
        </div>
      </a>
    </div>
  );
};

export default Project;
