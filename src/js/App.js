import "../scss/main.scss"
import React from "react";
import ReactDOM from "react-dom";
import {MainTemplate} from "./Components/MainTemplate/MainTemplate";



const App = () => {

	return (
		<>
			<MainTemplate/>
		</>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById('App')
)





