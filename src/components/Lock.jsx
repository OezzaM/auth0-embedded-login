import React from "react";
import { lock } from "../auth/auth0Client";

const Lock = () => {
  React.useEffect(() => {
    if (
      document.getElementById(process.env.REACT_APP_AUTH_0_CONTAINER) !== null
    ) {
      lock.show();
    }
  }, []);
  const style = { marginTop: "32px" };

  return (
    <div>
      <h2>Login Page</h2>
      <div id={process.env.REACT_APP_AUTH_0_CONTAINER} style={style}></div>
    </div>
  );
};

export default Lock;
