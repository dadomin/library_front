import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PythonReq = () => {
    const now = sessionStorage.getItem("now");
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    const [pyVer, setPyVer] = useState("");
    const [libVer, setLibVer] = useState("");
    const [libName, setLibName] = useState("");
    const [libReason, setLibReason] = useState("");

    const changePyVer = (e) => setPyVer(e.target.value);
    const changeLibVer = (e) => setLibVer(e.target.value);
    const changeLibName= (e) => setLibName(e.target.value);
    const changeLibReason = (e) => setLibReason(e.target.value);

    const navigate = useNavigate();
    if(now !== "0") {
        alert("일반 사용자만 반입 신청 할 수 있습니다.");
        
        navigate("/");
        return;
    }

    const onReset = () => {
        setPyVer("");
        setLibVer("");
        setLibName("");
        setLibReason("");
    }

    const checkInput = () =>{
        if(pyVer === "" || libVer === "" || libName === "" || libReason === "") {
            alert("비워진 값이 존재합니다.");
            return;
        }
        reqLib();
    }

    const reqLib = () => {
        console.log({pyVer, libName, libVer, libReason});
        axios
        .post('http://133.186.247.196:9000/lib/python/req', {
            pythonVer : pyVer,
            plibVer : libVer,
            plibName : libName,
            libReason : libReason,
            loginSession : [{
                userId : user.user_id,
                userName : user.user_name,
                adminType : user.admin_type
            }]
        })
        .then((res)=>{
            let data = res.data;
            if(data.status === "200"){
                alert('반입 신청이 완료되었습니다.');
                window.location.replace('/lib/python/list');
            }else {
                alert('반입 신청 오류');
                
                window.location.replace('/lib/python/req');
            }
        })
        
    }
    
    const removeForm = () => {
        let inputList = document.getElementsByClassName("req-d");
        console.log(inputList)
        for( let i = 0; i < inputList.length; i++) {
            console.log(inputList[i].value);
            inputList[i].value = "";
        }
        onReset();
    }

    return(
        <>
        <section id="req-form">
            <h3 className="title-sub">라이브러리 반입</h3>
            <h1 className="title">Python Library</h1>

            <div className="req-detail">
                <div>
                    <span>Python Version</span>
                    <input type={"text"} className="req-d" placeholder={'파이썬 버전을 입력하세요.'} onChange={e => changePyVer(e)}/>
                </div>
                <div>
                    <span>Library Name</span>
                    <input type={"text"} className="req-d" placeholder={'라이브러리 이름을 입력하세요.'} onChange={e => changeLibName(e)}/>
                </div>
                <div>
                    <span>Library Version</span>
                    <input type={"text"} className="req-d" placeholder={'라이브러리 버전을 입력하세요.'} onChange={e => changeLibVer(e)}/>
                </div>
                <div>
                    <span>신청 사유</span>
                    <textarea className="req-d" placeholder={'신청 사유를 입력하세요.'} onChange={e => changeLibReason(e)}></textarea>
                </div>
            </div>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={checkInput}>신청</button>
                <button className="btn white-btn" onClick={removeForm}>초기화</button>
            </div>

        </section>
        </>
    )
}

export default PythonReq;