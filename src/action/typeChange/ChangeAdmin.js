const ChangeAdmin = () => {
    const user = sessionStorage.getItem('user');

    if(user === null) {
        alert("로그인 후 이용해주세요.");
        return;
    }else if(JSON.parse(user).admin_type === "1"){
        
        alert("관리자 모드로 전환하였습니다.");
        sessionStorage.setItem('now', 1);
        window.location.href="/";
        return;
    }else {
        alert("관리자로 전환할수 없습니다.");
        window.location.href = "/";
        return;
    }
}

export default ChangeAdmin;