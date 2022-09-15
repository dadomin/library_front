const ChangeUser = () => {
    const user = sessionStorage.getItem('user');
    console.log('asdf');

    if(user === null) {
        alert("로그인 후 이용해주세요.");
        return;
    }else if(JSON.parse(user).admin_type === "2"){
        alert("사용자로 전환할수 없습니다.");
        window.location.href="/";
        return;
    }else {
        alert("사용자 모드로 전환하였습니다.");
        sessionStorage.setItem('now', 0);
        window.location.href = "/";
        return;
    }

}

export default ChangeUser;