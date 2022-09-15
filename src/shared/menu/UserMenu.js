import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserMenu = (u) => {
    const [user, setUser] = useState({});
    useEffect(()=> {
        setUser(u.user);
    },[])

    return (
        <>
            <div className="main-menu">
                <div><span>라이브러리 반입</span>
                    <div className="menu-sub">
                        <Link to ={'/lib/python/req'}>Python Library</Link>
                        <Link to ={'/lib/java/req'}>Java Library</Link>
                    </div>
                </div>
                <div>
                    <span>이력관리</span>
                    <div className="menu-sub">
                        <Link to ={'/lib/python/list'}>Python Library</Link>
                        <Link to ={'/lib/java/list'}>Java Library</Link>
                    </div>
                </div>
            </div>

            <div className="profile-tab">
                <h1>{user.user_name}</h1>
                <p>{user.user_dept}</p>
                <div className="menu-sub logout-tab">
                    <Link to ={'/change/admin'}>관리자 전환</Link>
                </div>
            </div>
        </>
    )

}

export default UserMenu;