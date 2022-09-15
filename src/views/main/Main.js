import { useEffect } from "react";
import { useState } from "react";
import AdminMain from "./component/AdminMain";
import UserMain from "./component/UserMain";

const Main = () => {

    const [user, setUser] = useState({});
    const [now, setNow] = useState("");

    useEffect(()=> {
        // setUser(sessionStorage.getItem('user'))
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
    }, []);

    return (
        <>
        { now === "0" && <UserMain user={user} now={now}/> }
        { now === "1" && <AdminMain user={user} now={now}/>}
        </>
    )
}

export default Main;