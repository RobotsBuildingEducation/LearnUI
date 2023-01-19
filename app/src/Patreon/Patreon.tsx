// @ts-nocheck
import { useEffect, useState } from "react";

let Patreon = ({ patreonObject }) => {
  const [videoSource, setVideoSource] = useState("");
  // useEffect(() => {
  //   setVideoSource(patreonObject.videoSource);
  // }, [patreonObject]);

  return (
    <>
      &#128064;
      <div key={patreonObject.button}>
        <video controls autoPlay>
          <source src={patreonObject.videoSource} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Patreon;
