import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initialaizeAuth = ()=>{
     initializeApp(firebaseConfig);
}
export default initialaizeAuth;