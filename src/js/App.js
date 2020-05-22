import "../scss/main.scss"
import React from "react";
import ReactDOM from "react-dom";
import {MainTemplate} from "./Components/MainTemplate/MainTemplate";
import {BrowserRouter, HashRouter,Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Login} from "./Components/Login/Login";



const App = () => {

	return (
		<HashRouter>
			<>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/login'} component={Login}/>
			</>
		</HashRouter>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById('App')
)





