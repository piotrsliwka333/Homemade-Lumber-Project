import "../scss/main.scss"
import React from "react";
import ReactDOM from "react-dom";
import {MainTemplate} from "./Components/MainTemplate/MainTemplate";
import {BrowserRouter, HashRouter,Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";



const App = () => {

	return (
		<BrowserRouter>
			<Route path={'/'} component={Home}/>
		</BrowserRouter>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById('App')
)





