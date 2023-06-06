import React from "react";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";

export const NotFound = () => {
  return (
    <MainTemplate>
      <section className="not-found">
        <h1 className="not-found__title">Strona nie znaleziona</h1>
      </section>
    </MainTemplate>
  );
};
