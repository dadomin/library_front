import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import loginBackImg from '../../img/login-back.png'

const Login = () => {

    const [id, setId] = useState("");
    const handleId = (e) => setId(e.target.value);

    const [pw, setPw] = useState("");
    const handlePw = (e) => setPw(e.target.value);

    
    // if(sessionStorage.getItem('user') != null) {
    //     alert("로그아웃 후 로그인 하세요");
    //     window.location.href = "/";
    //     return;
    // }

    function inputCheck() {
        console.log(id);
        console.log(pw);
        if(id === "" || pw === "") {
            alert("비워진 값이 존재합니다")
            return;
        }

        axios
        .post('http://133.186.247.196:9000/user/login', {
            userId : id,
            passwd : pw
        })
        .then((res)=> {
            console.log(res.data)
            let result = res.data;
            if(result.status === "fail") {
                alert(result.message);
                return;
            }
            if(result.status=== "success") {
                loginSession();
            }
        })
        
    }

    const loginSession = () => {

        axios
        .post('http://localhost:3787/login', {
            id : id,
            pw : pw
        })
        .then((res)=>{
            let userData = res.data[0];
            if(userData === undefined) {
                alert("비밀번호가 틀렸습니다.");
                return;
            }
            console.log("로그인 성공");

            sessionStorage.removeItem('user');
            sessionStorage.removeItem('now');

            sessionStorage.setItem('user', JSON.stringify(userData));
            sessionStorage.setItem('now', userData.admin_type);

            console.log(sessionStorage);
            
            alert(`${JSON.parse(sessionStorage.user).user_name}님 로그인 성공`);
            window.location.replace('/');
        })
    }

    useEffect(()=> {
        if(sessionStorage.getItem('now') !== null) {
            window.location.replace('/');
        }
    },[])

    return(
        <section id="login">
            <section id="login-bar">
                <img src={loginBackImg} alt="back" id="login-back"/>
                <div className="login-txt">
                    <p>Shinhan Bank</p>
                    <h3>라이브러리 반입 프로세스</h3>
                </div>
            </section>
            <section id="login-tab">

                <div className="login-form">
                    <h1>LOGIN</h1>

                    <p>ID</p>
                    <input className="input"type={"text"} placeholder={"행번 입력 (ex) 22200223"} onChange={e=> handleId(e)}/>

                    <p>Password</p>
                    <input className="input" type={"password"} placeholder={"비밀번호 입력"} onChange={e => handlePw(e)}/>

                    <Link to={'/login'}>비밀번호 초기화</Link>

                    <button onClick={inputCheck}>LOGIN</button>
                </div>
                
            </section>
            
        </section>
    )
}

export default Login;