import React from "react";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { HomeJumbotron } from "../../components/Home/HomeJumbotron";
import { HomeThreeColumns } from "../../components/Home/HomeThreeColumns";
import { HomeSimpleSteps } from "../../components/Home/HomeSimpleSteps";
import { HomeAboutUs } from "../../components/Home/HomeAboutUs";
import { HomeHelp } from "../../components/Home/HomeHelp";
import { HomeContact } from "../../components/Home/HomeContact";

export const Home = (props) => {
  return (
    <MainTemplate>
      <HomeJumbotron />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeHelp />
      <HomeContact />
    </MainTemplate>
  );
};
