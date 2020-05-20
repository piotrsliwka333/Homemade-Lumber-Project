import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {HomeJumbotron} from "./HomeJumbotron";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeSimpleSteps} from "./HomeSimpleSteps";

export const Home = (props) => {



	return(
		<MainTemplate>
			<HomeJumbotron/>
			<HomeThreeColumns/>
			<HomeSimpleSteps/>
		</MainTemplate>
	)
}