import Auth0Lock from "auth0-lock";

export const lock = new Auth0Lock(
  process.env.REACT_APP_AUTH_0_CLIENT_ID,
  process.env.REACT_APP_AUTH_0_DOMAIN,
  {
    auth: {
      redirect: process.env.REACT_APP_AUTH_0_REDIRECT_URI,
      responseType: "token id_token",
      sso: true,
    },
    container: process.env.REACT_APP_AUTH_0_CONTAINER,
    theme: {
      primaryColor: "#3a99d8",
    },
    hooks: {
      loggingIn: function (context, cb) {
        console.log("Hello from the login hook!");
        console.log(context);
        cb();
      },
      signingUp: function (context, cb) {
        console.log(context);
        console.log("Hello from the sign-up hook!");
        cb();
      },
    },
  }
);
