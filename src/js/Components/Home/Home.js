import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {HomeJumbotron} from "./HomeJumbotron";
import {HomeThreeColumns} from "./HomeThreeColumns";

export const Home = (props) => {



	return(
		<MainTemplate>
			<HomeJumbotron/>
			<HomeThreeColumns/>
		</MainTemplate>
	)
}