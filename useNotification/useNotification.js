export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      alert("This browser doesnt support Notification.");
      return;
    }
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((onfulfilled) => {
          if (onfulfilled === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
  
    return fireNotif;
  };

  /*
  const App = () => {
  const triggerNotif = useNotification("Hi i'm notification.", {
    body: "I'm body."
  });

  return (
    <div className="main">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};
*/