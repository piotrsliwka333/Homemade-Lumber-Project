import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {HomeJumbotron} from "./HomeJumbotron";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSimpleSteps} from "./HomeSimpleSteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeHelp} from "./HomeHelp";
import {HomeContact} from "./HomeContact";

export const Home = (props) => {
	const [loggedHome,setLoggedHome] = useState(false)


	return(
		<MainTemplate>
			<HomeJumbotron/>
			<HomeThreeColumns/>
			<HomeSimpleSteps/>
			<HomeAboutUs/>
			<HomeHelp/>
			<HomeContact/>
		</MainTemplate>
	)
}