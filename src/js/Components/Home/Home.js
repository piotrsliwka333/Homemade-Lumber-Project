import React, {useEffect, useState} from "react";
import {MainTemplate} from "../MainTemplate/MainTemplate";
import {HomeJumbotron} from "./HomeJumbotron";

export const Home = (props) => {



	return(
		<MainTemplate>
			<HomeJumbotron/>
		</MainTemplate>
	)
}