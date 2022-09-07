import { useState } from "react";
import Intro from "../intro/Intro";
import Styles from "./aboutMe.module.css";

const AboutMe = () => {
  const [education, setEducation] = useState(true);
  const [work, setWork] = useState(false);

  const workExperinceOnClick = () => {
    setWork(true);
    setEducation(false);
  };
  const educationOnClick = () => {
    setWork(false);
    setEducation(true);
  };
  return (
    <div className={Styles.Container}>
      <div>
        <Intro />
        <h3 className={Styles.title}>What i prefer to work with:</h3>
        <p className={Styles.mySkillz}>Javascript</p>
        <p className={Styles.mySkillz}>TypeScript</p>
        <p className={Styles.mySkillz}>React</p>
        <p className={Styles.mySkillz}>Axios</p>
        <p className={Styles.mySkillz}>Redux</p>
        <p className={Styles.mySkillz}>Vanilla Css</p>
        <h3 className={Styles.title}>Why i prefer React?</h3>
      </div>
      <div className={Styles.textContainer}>
        <h3 className={Styles.title}>About Me:</h3>
        <p className={Styles.text}>
          Hello! My name is Nils and im a Front End Developer from Stockholm
          Sweden. <br /> Im a super positive person and love the social part as
          much as i love programing, especially Javascript and React,
          <br />. I love the challenge and freedom that programing gives you,
          also the endless opurtunities, your imagination is the only thing that
          sets the limit of what you can do. <br />
          Im really hungry to learn and love all different kind of challenges,
          Especially if they keep you awake all night. If you serve me a problem
          or task i will put my heart and soul into it.
        </p>

        <hr className={Styles.hr} />
        <h3 className={Styles.title}>Peronal Me:</h3>
        <p className={Styles.text}>
          Im born in Gothenburg, but raised most of my youth in Hälsingland,
          then i moved to Sthlm at the age of 16 to go to high-school. <br />
          After that went to Lumpen to become a sailor, before i started my
          career as a bartender in Sthlm, and for the 5 most recent years bofore
          i started my studying to become a Front End Developer i were a maneger
          with 30 people working with me at a restaurant called Bleck. Ive been
          travleing my entire life and learned different skillz, like becomeing
          a sommeiler, a rescue diver, i learned to master a guitar and became a
          really good skateborder. Im super social and have a huge working
          moral.
        </p>
        <hr className={Styles.hr} />
        <h3 className={Styles.title}>If?</h3>
        <p className={Styles.text}>
          I do have some projects that im currently working on that you can see
          under Projects, but i would love to get a challenge from you. So
          please ask me to create something on your request, as a work sample.
        </p>
        <hr className={Styles.hr} />
        <div className={Styles.linkDiv}>
          <p onClick={() => educationOnClick()} className={Styles.linkText}>
            My Education
          </p>
          <p onClick={() => workExperinceOnClick()} className={Styles.linkText}>
            Work Experience
          </p>
        </div>
        {education ? (
          <div className={Styles.linkToogleText}>
            <h4>Education:</h4>
            <br />
            <p>
              Front end devloper at CME: 2021 - present <br /> Sommelier step 1
              and 2 at vinkällan: 2020 <br /> Certified rescue diver: 2018{" "}
              <br />
              Lumpen: 2009-2010 <br /> Intersnhip at Bear 'n' stearns: 2008
              <br /> HighSchool diploma: Fryhyset KunskapCentrum (Sam/Sam)
              2004-2007{" "}
            </p>
          </div>
        ) : null}
        {work ? (
          <div className={Styles.linkToogleText}>
            <h4>Work Experience:</h4>
            <br />
            <p>
              Resatuarnt Bleck: Manager 2017-2021 <br />
              Sjöfartshotellet Scandic: Manager 2016-2017 <br />
              Malmen by Scandic: Head bartender 2014-2017 <br />
              Gården by stureplansgruppen: bartender 2016 <br />
              Ladame noire: bartender 2015 <br />
              Mosebacke: bartender 2012-2015
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AboutMe;
