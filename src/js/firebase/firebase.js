import * as firebase from "firebase";

let firebaseConfig = {
	apiKey: "AIzaSyDfLwc-DgpE35AYITdu8pmHw7A7b8Vypg4",
	authDomain: "homemade-lumber.firebaseapp.com",
	databaseURL: "https://homemade-lumber.firebaseio.com",
	projectId: "homemade-lumber",
	storageBucket: "homemade-lumber.appspot.com",
	messagingSenderId: "572587573721",
	appId: "1:572587573721:web:0632415714f3febc0f19c8",
	measurementId: "G-MLZ1MW90P7"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;