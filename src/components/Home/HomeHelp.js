import React, { useState } from "react";
import { HomeHelpFoundations } from "./HomeHelpFoundations";
import { HomeHelpCollections } from "./HomeHelpCollections";
import { HomeHelpOrganizations } from "./HomeHelpOrganizations";

export const HomeHelp = () => {
  const [content, setContent] = useState("foundations");

  const changeContent = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  // we can not add name atribute on <li> and we can not add value on <a>
  //coz in console we'll undefined in both cases
  return (
    <section className="help" id="help">
      <h6 className="help__title">Who we help ?</h6>
      <img
        src="/assets/Decoration.svg"
        alt="Decoration"
        className="help__decoration"
      />
      <div className="help__buttons">
        <a
          name={"foundations"}
          onClick={changeContent}
          className={content === "foundations" ? "btn active-btn" : "btn"}
        >
          Foundations
        </a>
        <a
          name="organizations"
          onClick={changeContent}
          className={content === "organizations" ? "btn active-btn" : "btn"}
        >
          Non-governmental <br /> organizations
        </a>
        <a
          name="collections"
          onClick={changeContent}
          className={content === "collections" ? "btn active-btn" : "btn"}
        >
          Local <br />
          collections
        </a>
      </div>
      {content === "foundations" && <HomeHelpFoundations />}
      {content === "organizations" && <HomeHelpOrganizations />}
      {content === "collections" && <HomeHelpCollections />}
    </section>
  );
};
