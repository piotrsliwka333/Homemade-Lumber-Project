import React, { useState } from "react";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { Link } from "react-router-dom";
import fire from "../../firebase/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const Registration = () => {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");
  const [passwordRepeatError2, setPasswordRepeatError2] = useState("");
  const [googleSignInError, setGoogleSignInError] = useState(false);
  function validateEmail(email) {
    let emailValidation =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidation.test(email);
  }
  let db = firebase.firestore();
  let authentication = firebase.auth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      emailError === false &&
      passwordError === false &&
      passwordRepeatError === false &&
      passwordRepeatError2 === false
    ) {
      setLogged(true);
      setEmail("");
      setPassword("");
      setPasswordRepeat("");
      LogIn();
    }
  };

  const handleCheckEmail = (e) => {
    if (validateEmail(e.target.value)) {
      setEmail(e.target.value);
      setEmailError(false);
    } else {
      setEmail(e.target.value);
      setEmailError(true);
    }
  };

  const handleCheckPassword = (e) => {
    if (e.target.value.length < 6) {
      setPassword(e.target.value);
      setPasswordError(true);
    } else {
      setPassword(e.target.value);
      setPasswordError(false);
    }
  };

  const handleCheckPasswordRepeat = (e) => {
    if (e.target.value.length < 6) {
      setPasswordRepeat(e.target.value);
      setPasswordRepeatError(true);
    }
    if (e.target.value.length >= 6) {
      setPasswordRepeat(e.target.value);
      setPasswordRepeatError(false);
    }
    if (e.target.value !== password) {
      setPasswordRepeat(e.target.value);
      setPasswordRepeatError2(true);
    }
    if (e.target.value === password) {
      setPasswordRepeat(e.target.value);
      setPasswordRepeatError2(false);
    }
  };

  const auth = fire.auth();
  const LogIn = () => {
    // this function will change logged on true and this info will be sent by
    setLogged(true); // props to main Template to show user name and option to log out
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch((e) => console.log(e));
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    let base_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(base_provider)
      .then((cred) => db.collection("users").doc(cred.user.uid))
      .catch((err) => {
        setGoogleSignInError(true);
      });
  };

  return (
    <MainTemplate logIn={logged}>
      <section className="registration">
        <h1 className="registration__title">Register Account</h1>
        <img
          className="registration__decoration"
          alt="Decoration"
          src="/assets/Decoration.svg"
        />
        <div className="registration-box">
          <form onSubmit={handleSubmit} className="registration-box__form">
            <label className="registration-box__form__label">Email</label>
            <input
              value={email}
              onChange={handleCheckEmail}
              type="email"
              className={
                emailError
                  ? "registration-box__form__input error-border"
                  : "login-box__form__input"
              }
            />
            {emailError && (
              <p className="error-message">Podany email jest nieprawidłowy</p>
            )}
            <label className="registration-box__form__label">Password</label>
            <input
              value={password}
              onChange={handleCheckPassword}
              type="password"
              className={
                passwordError
                  ? "registration-box__form__input error-border"
                  : "login-box__form__input"
              }
            />
            {passwordError && (
              <p className="error-message">Podane hasło jest za krótkie</p>
            )}
            <label className="registration-box__form__label">
              Repeat Password
            </label>
            <input
              value={passwordRepeat}
              onChange={handleCheckPasswordRepeat}
              type="password"
              className={
                passwordRepeatError
                  ? "registration-box__form__input error-border"
                  : "login-box__form__input"
              }
            />
            {passwordRepeatError && (
              <p className="error-message">Podane hasło musi mieć 6 znaków</p>
            )}
            {passwordRepeatError2 && (
              <p className="error-message">Hasła muszą być takie same</p>
            )}
            <div className="registration-btn-box">
              <Link className="btn" to="/login">
                Zaloguj się
              </Link>
              <button type="submit" className="btn active-btn">
                Załóż konto
              </button>
            </div>
            <div className="google-btn" onClick={(e) => signInWithGoogle(e)}>
              <div className="google-icon-wrapper">
                <img
                  alt="google sign-in icon"
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </form>
        </div>
      </section>
    </MainTemplate>
  );
};
