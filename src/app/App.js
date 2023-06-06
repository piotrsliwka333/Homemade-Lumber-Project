import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { Registration } from "../pages/Registration/Registration";
import { GiveThings } from "../pages/GiveThings/GiveThings";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Loading } from "../components/Shared/Loading/Loading";

export const App = () => {
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      setLogged(true);
    } else {
      setLogged(false);
    }
    setIsLoading(false);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route
          path={"/login"}
          render={() =>
            isLoading ? (
              <Loading />
            ) : logged ? (
              <Redirect to="/give-things" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path={"/registration"}
          render={() =>
            isLoading ? (
              <Loading />
            ) : logged ? (
              <Redirect to="/give-things" />
            ) : (
              <Registration />
            )
          }
        />
        <Route
          path="/registration"
          render={() =>
            isLoading ? (
              <Loading />
            ) : logged ? (
              <Registration />
            ) : (
              <Redirect to="/give-things" />
            )
          }
        />
        <Route
          path="/give-things"
          render={() =>
            isLoading ? (
              <Loading />
            ) : logged ? (
              <GiveThings />
            ) : (
              <Redirect to={"login"} />
            )
          }
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
