import { useRef } from "react";

export const useFullScreen = (callback) => {
    const element = useRef();
    const runCallback = (isFull) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
  
        runCallback(true);
      }
    };
    const exitFull = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCallback(false);
    };
    return { element, triggerFull, exitFull };
  };

  /*
  const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="main" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
        <button onClick={exitFull}>Exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
};
  */