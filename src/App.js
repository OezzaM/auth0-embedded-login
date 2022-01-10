import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Header from "./components/Header";
import { lock } from "./auth/auth0Client";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    lock.checkSession({}, function (error, authResult) {
      if (error || !authResult) {
        setIsAuth(false);
      } else {
        lock.getUserInfo(authResult.accessToken, function (error, profile) {
          if (error) setIsAuth(false);
          if (profile) setIsAuth(true);
        });
      }
    });
    lock.on("authenticated", () => {
      setIsAuth(true);
    });
    
  }, []);
  return (
    <div>
      <main>
        <BrowserRouter>
          <Header isAuthenticated={isAuth} />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              path="/private"
              render={() => <Private isAuthenticated={isAuth} />}
            />
            <Route
              path="/login"
              render={() => <Login isAuthenticated={isAuth} />}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
