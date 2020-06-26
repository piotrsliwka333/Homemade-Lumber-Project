import "../scss/main.scss"
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Route,Redirect} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Login} from "./Components/Login/Login";
import {Registration} from "./Components/Registration/Registration";
import {LogOut} from "./Components/LogOut/LogOut";
import {GiveThings} from "./Components/GiveThings/GiveThings";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const App = () => {
	const [logged,setLogged] = useState(false)

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			setLogged(true)
		} else {
			setLogged(false)
		}
	})

	return (
		<HashRouter>
			<>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/login'} render={() => (
					!logged ?(<Login/>) :(<Redirect to={'/give-things'}/>)
				)}/>
				<Route path={'/registration'} render={() => (
					!logged ? (<Registration/>) : (<Redirect to={'/give-things'}/>)
				)}/>
				<Route path={'/give-things'} render={() => (
					logged ? (<GiveThings/>) : (<Redirect to={'login'}/>)
				)}/>
				{/*<Route path={'/login'} component={Login}/>*/}
				{/*<Route path={'/registration'} component={Registration}/>*/}
				{/*<Route path={'/logout'} component={LogOut}/>*/}
				{/*<Route path={'/give-things'} component={GiveThings}/>*/}
			</>
		</HashRouter>
	)
}

ReactDOM.render(
	<App/>,
	document.getElementById('App')
)





