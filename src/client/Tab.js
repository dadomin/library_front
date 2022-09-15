import ChangeAdmin from "../action/typeChange/ChangeAdmin";
import ChangeUser from "../action/typeChange/ChangeUser";
import JavaList from "../views/list/JavaList";
import PythonList from "../views/list/PythonList";
import Login from "../views/login/Login";
import Main from "../views/main/Main";
import JavaReq from "../views/request/JavaReq";
import PythonReq from "../views/request/PythonReq";

const Tab = (props) => {

    const tab = props.tab;
    
    if(tab === "main") {
        return <Main/>
    }

    if(tab === "javaReq") {
        return <JavaReq></JavaReq>
    }

    if(tab === "pythonReq") {
        return <PythonReq></PythonReq>
    }

    if(tab === "javaList") {
        return <JavaList></JavaList>;
    }

    if(tab === "pythonList") {
        return <PythonList></PythonList>;
    }

    if(tab === "changeUser") {
        return <ChangeUser/>
    }

    if(tab === "changeAdmin") {
        return <ChangeAdmin></ChangeAdmin>
    }

}

export default Tab;