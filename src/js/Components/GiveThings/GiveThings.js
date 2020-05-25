import React from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {HomeContact} from "../Home/HomeContact";
import {GiveThingsJumbotron} from "./GiveThingsJumbotron";

export const GiveThings = () => {

	return(
		<MainTemplate>
			<GiveThingsJumbotron/>
			<HomeContact/>
		</MainTemplate>
	)
}