import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
    if (typeof onClick !== "function") {
      return;
    }
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      // componentWillUnMount
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };

  /*
  const App = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  return (
    <div className="main">
      <div ref={title}>Hi</div>
    </div>
  );
};

  */