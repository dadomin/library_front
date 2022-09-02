import { Link } from "react-router-dom";

const AdminMenu = (user) => {
    return (
        <>
            <div className="main-menu">
                <div><span>이력관리</span>
                    <div className="menu-sub">
                        <Link to ={'/lib/python/list'}>Python Library</Link>
                        <Link to ={'/lib/java/list'}>Java Library</Link>
                    </div>
                </div>
                <div>
                    <Link to={'/user/list'}>사용자관리</Link>
                </div>
            </div>

            <div className="profile-tab">
                <h1>{user.user_name}</h1>
                <p>{user.user_dept}</p>
                <div className="menu-sub logout-tab">
                    <Link to ={'/change/user'}>사용자 전환</Link>
                    <Link to ={'/logout'}>로그아웃</Link>
                </div>
            </div>
        </>
    )
}

export default AdminMenu;