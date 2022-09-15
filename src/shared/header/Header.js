import { useEffect } from "react";
import { useState } from "react";
import AdminMenu from "../menu/AdminMenu";
import { Link } from "react-router-dom";
import UserMenu from "../menu/UserMenu";
import logoutImg from '../../img/exit.png';

const Header = () => {

    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("");

    useEffect(()=>{
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
    }, []);

    const logout = () => {
        window.location.replace('/logout')
    }
    
    if(now === null) {
        alert("로그인 후 이용 바랍니다.");
        window.location.href = "/login";
        return;
    }

    return (
        <header id={now === "1" ? "admin-header" : ''}>
            <Link to={'/'}>라이브러리 반입 프로세스</Link>
            <div id="menu-tab">
                {now === "1" && <AdminMenu user={user}/>}
                {now === "0" && <UserMenu user={user}/>}
            <button onClick={logout}>
                <img src={logoutImg} alt="logout"></img>
            </button>
            </div>
        </header>
    )
}

export default Header;