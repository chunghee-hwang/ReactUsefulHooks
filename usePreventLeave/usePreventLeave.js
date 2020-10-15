export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const diablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
    return { enablePrevent, diablePrevent };
  };

  /*
  const App = () => {
  const { enablePrevent, diablePrevent } = usePreventLeave();
  return (
    <div className="main">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={diablePrevent}>Unprotect</button>
    </div>
  );
};
  */