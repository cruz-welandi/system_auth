import { jwtDecode } from "jwt-decode";

function isAuthenticated(){
    const token = window.localStorage.getItem("authToken");

    if(token){
        const {exp} = jwtDecode(token);
        if(exp * 1000 > new Date().getTime()){
            return true;
        }
        return false;
    }
    return false;
};

export default isAuthenticated;