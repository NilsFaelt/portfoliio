import { useState } from "react";
import Styles from "./project.module.css";

interface Props {
  furrency: string;
  link: string;
  title: string;
  workedWith: string[];
  info: string;
  githubLink: string;
}

const Project: React.FC<Props> = ({
  furrency,
  link,
  title,
  workedWith,
  info,
  githubLink,
}) => {
  const [zIndexImg, setZIndexImg] = useState("0");
  const [toogleInfo, setToogleInfo] = useState(true);
  const [toogleTools, setToogleTools] = useState(true);

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>{title}</h3>
      <a target='_blank' href={link}>
        <img
          onMouseOver={() => setZIndexImg("3")}
          onMouseLeave={() => {
            setZIndexImg("0");
          }}
          style={{ zIndex: `${zIndexImg}` }}
          className={Styles.img}
          src={furrency}
          alt=''
        />
      </a>

      <div
        onMouseOver={() => setToogleInfo(false)}
        onMouseLeave={() => setToogleInfo(true)}
        className={toogleInfo ? Styles.infoDiv : Styles.infoDivDarker}
      >
        <h4 className={Styles.infoTitle}>Info:</h4>
        <p className={Styles.textInfo}>{info}</p>

        <a className={Styles.githubLink} target='_blank' href={githubLink}>
          Github Link
        </a>
      </div>
      <div
        onMouseOver={() => setToogleTools(false)}
        onMouseLeave={() => setToogleTools(true)}
        className={
          toogleTools ? Styles.infoDivTools : Styles.infoDivToolsDarker
        }
      >
        <h4 className={Styles.infoTitle}>Tools/Languuages:</h4>
        {workedWith?.map((text) => (
          <p className={Styles.text}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;
