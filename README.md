# Embedded Login  with Auth0

Basic example of embedded integration with Auth0 using the ['auth0-lock'](https://www.npmjs.com/package/auth0-js), for more information about the library [click here](https://auth0.com/lock).

## Run application

To run the application, the first thing you should do is create the environment variables file .env in the root of the project and set the variables according to your auth0 account.

example .env
```shell
REACT_APP_AUTH_0_CLIENT_ID= // Your client id
REACT_APP_AUTH_0_DOMAIN= // Your domain
REACT_APP_AUTH_0_CONTAINER=auth0-login-container
```
The environment variable REACT_APP_AUTH_0_CONTAINER contains the name of the div where the auth0 login is embedded, set it with that default value, if you change it you must change it throughout the code

After configuring the .env file, it only remains to run the following commands in the terminal

```shell
npm install || yarn install // Install all dependencies
npm start || yarn start // Run the project in a local environment
```

End, the application is correctly configured and ready to use.
