import React from "react";
import { Link } from "react-router-dom";
import { MainTemplate } from "../MainTemplate/MainTemplate";

export const LogOut = () => {
  return (
    <MainTemplate>
      <section className="log-out">
        <h1 className="log-out__title">
          Wylogowanie nastąpiło
          <br /> pomyślnie
        </h1>
        <img
          className="log-out__decoration"
          alt="Decoration"
          src="/assets/Decoration.svg"
        />
        <Link to={"/"} className="log-out__btn">
          Strona główna
        </Link>
      </section>
    </MainTemplate>
  );
};
