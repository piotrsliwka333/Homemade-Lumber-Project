import "../scss/main.scss"
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Login} from "./Components/Login/Login";
import {Registration} from "./Components/Registration/Registration";
import {LogOut} from "./Components/LogOut/LogOut";
import {GiveThings} from "./Components/GiveThings/GiveThings";


const App = () => {

	return (
		<BrowserRouter>
			<>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/login'} component={Login}/>
				<Route path={'/registration'} component={Registration}/>
				<Route path={'/logout'} component={LogOut}/>
				<Route path={'/give-things'} component={GiveThings}/>
			</>
		</BrowserRouter>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById('App')
)





