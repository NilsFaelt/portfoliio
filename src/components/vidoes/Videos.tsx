import ReactPlayer from "react-player";
import Styles from "./videos.module.css";

const Videos = () => {
  return (
    <div className={Styles.container}>
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=4uTtUv9xd8E"}
        controls={false}
        width={"80vw"}
        height={"50vh"}
        style={{ marginTop: "10vh", pointerEvents: "none" }}
        playing={true}
        loop={true}
      />
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=uQdxHA-JXMk"}
        controls={false}
        width={"80vw"}
        height={"50vh"}
        style={{ marginTop: "10vh", pointerEvents: "none" }}
        playing={true}
        loop={true}
      />
    </div>
  );
};

export default Videos;
