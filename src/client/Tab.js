import Login from "../views/login/Login";
import Main from "../views/main/Main";

const Tab = (props) => {

    const tab = props.tab;
    if(tab === "login") {
        return <Login/>
    }
    
    if(tab === "main") {
        return <Main/>
    }

}

export default Tab;