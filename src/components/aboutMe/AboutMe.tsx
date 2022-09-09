import { useState } from "react";
import Intro from "../intro/Intro";
import Styles from "./aboutMe.module.css";
import linkedin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";
import netlify from "../../assets/img/netlify.svg";

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
        <p className={Styles.textWhyReact}>
          Its hard to describe but when you learn to navigate in React it is a
          hallelujha moment, evrything is so work efficient an smooth. But what
          makes it a technical wonderchild, is that u can reuse your components
          infinte times, For example under projects i built each module for
          presenting my projects, then reuses them evrytime a get a new project.{" "}
          <br />
          One more superpower React has in its pocket it that it only update the
          changes that acctualy happens instead of rerendering the entire dom
          element, so if you only make a 2% change in your component you dont
          have to rerender the entire component, just the 2%, which makes the
          experince so much more smooth for the user. <br /> Is there any
          backsides with React? Yes, but nothing that makes it not worth using.
          But the main problem developers hav with React is that you only pass
          things down, like a waterfall, so if you dont plan your code or using
          a store you can find yourself in problem. But if you just learn to
          navigate in React that will not be a problem, or learn to use Redux or
          Recoil wich helps you store youre data on the side, and lets you get
          it whenever you need.
        </p>
        <div>
          <a
            href='https://www.linkedin.com/in/nils-faelt-73b163227/'
            target='_blank'
          >
            <img className={Styles.linkedinLogo} src={linkedin} alt='' />
          </a>
          <a href='https://github.com/NilsFaelt' target='_blank'>
            <img className={Styles.linkedinLogo} src={github} alt='' />
          </a>
          <a
            href='https://app.netlify.com/teams/nilsfaelt/overview?_ga=2.215031006.85119360.1662299098-661044567.1655653906&_gac=1.84992491.1660742449.CjwKCAjwo_KXBhAaEiwA2RZ8hGWD84ylj1oM5kzVah-oeCO6F_eMX1dxRwgIqBkybbAwprS-8zy6ABoCnvMQAvD_BwE&_gl=1%2A47bag1%2A_gcl_aw%2AR0NMLjE2NjA3NDI0NDkuQ2p3S0NBandvX0tYQmhBYUVpd0EyUlo4aEdXRDg0eWxqMW9NNWt6VmFoLW9lQ082Rl9lTVgxZHhSd2dJcUJreWJiQXdwclMtOHp5NkFCb0Nudk1RQXZEX0J3RQ..'
            target='_blank'
          >
            <img className={Styles.linkedinLogo} src={netlify} alt='' />
          </a>
        </div>
      </div>
      <div className={Styles.textContainer}>
        <h3 className={Styles.title}>About Me:</h3>
        <p className={Styles.text}>
          Hello! My name is Nils and im a Front End Developer from Stockholm
          Sweden. <br /> Im a super positive person and love the social part as
          much as i love programing, especially Javascript and React,
          <br />. I love the challenge and freedom that programing gives you,
          also the endless opportunities, your imagination is the only thing
          that sets the limit of what you can do. <br />
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
          i started my studying to become a Front End Developer i were a manager
          with 30 people working with me at a restaurant called Bleck. Ive been
          traveling my entire life and learned different skillz, like becomeing
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
