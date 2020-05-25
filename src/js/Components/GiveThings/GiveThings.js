import React from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {HomeContact} from "../Home/HomeContact";
import {GiveThingsJumbotron} from "./GiveThingsJumbotron";
import {GiveThingsForm} from "./GiveThingsForm";

export const GiveThings = () => {


	return(
		<MainTemplate>
			<GiveThingsJumbotron/>
			<GiveThingsForm/>
			<HomeContact/>
		</MainTemplate>
	)
}