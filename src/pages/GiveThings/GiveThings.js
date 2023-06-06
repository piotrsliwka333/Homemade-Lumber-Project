import React from "react";
import { GiveThingsForm } from "../../components/GiveThings/GiveThingsForm";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { HomeContact } from "../../components/Home/HomeContact";
import { GiveThingsJumbotron } from "../../components/GiveThings/GiveThingsJumbotron";

export const GiveThings = () => {
  return (
    <MainTemplate>
      <GiveThingsJumbotron />
      <GiveThingsForm />
      <HomeContact />
    </MainTemplate>
  );
};
