import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImg from '../../img/upload.png';

const JavaReq = () => {
    
    const now = sessionStorage.getItem("now");
    const user = JSON.parse(sessionStorage.getItem('user'));
    
    const [fileType, setFileType] = useState("maven");
    const [libReason, setLibReason] = useState("");
    const [libFile, setLibFile] = useState([]);

    
    const navigate = useNavigate();
    if(now !== "0") {
        alert("일반 사용자만 반입 신청 할 수 있습니다.");
        navigate("/");
        return;
    }


    const emptyFile = () => {
        setLibFile([]);
        document.getElementById('req-lib-reason').value = "";
        document.getElementById('output').textContent = "";
        alert("파일 형식이 잘못되었습니다.");
    }

    const removeForm = () => {
        document.getElementById('req-lib-reason').value = "";
        document.getElementById('output').textContent = "";
        setLibFile([]);
    }

    const changeLibFile = (e) => {
        let file = e.target.files[0];
        console.log(file);
        setLibFile(file); 
        if(file.name === "undefined") {
            emptyFile();
            return;
        }else if(file.name === "build.gradle"){
            if(fileType !== "gradle")  {
                emptyFile();
                return;
            }
        }else if(file.name === "pom.xml") {
            if(fileType !== "maven")  {
                emptyFile();
                return;
            }
        }else {
            emptyFile();
            return;
        }
        readFile(file);
    }

    const changeLibReason = (e) => {setLibReason(e.target.value)}
    const changeFileType = (e) => {setFileType(e.target.id)}

    const readFile = (file) => {
        console.log(file);
        let fr = new FileReader();
        fr.onload = () => {
            document.getElementById('output').textContent = fr.result;
        }
        fr.readAsText(file);
    }
    const checkForm = (e) => {
        if(libFile.length === 0) {alert("파일이 비워져있습니다."); return;}
        if(libReason === "") {alert("신청사유가 비워져있습니다."); return;}
        javaReq();
    }
    
    const javaReq = (e) => {
        axios
        .post('http://133.186.247.196:9000/lib/java/req/file', {
            jlibFile : libFile,
            packageMgtKind : fileType,
            libReason : libReason,
            userId : user.user_id,
            userName : user.user_name,
            adminType : user.admin_type
        })
        .then((res)=> {
            console.log(res.data);
        })
    }

    return(
        <>
        <section id="req-form">
                
            <h3 className="title-sub">라이브러리 반입</h3>
            <h1 className="title">Java Library</h1>

            
            <div className="req-detail req-detail-2">
                <div id="req-choice">
                    <span>프로젝트 종류</span>
                    <ul className="ft-file-tab">
                        <li>
                            <input type="radio" className="dn" onChange={e=>changeFileType(e)} name="ft-file" id="maven" defaultChecked="checked"/>
                            <label htmlFor="maven" className="green-btn">Maven</label>
                        </li>
                        <li>
                            <input type="radio" className="dn"onChange={e=>changeFileType(e)} name="ft-file" id="gradle"/>
                            <label htmlFor="gradle" className="green-btn">Gradle</label>
                        </li>
                    </ul>

                    
                </div>
                
                <div>
                    <span>파일 첨부</span>
                    
                    <div className="ft-file-box">
                        <input type="file" id="ft-file-input" className="dn" onChange={e=>changeLibFile(e)}/>
                        <label htmlFor="ft-file-input">
                            <img src={uploadImg} alt="uploadImg"></img>
                            <p>파일을 찾아 선택하세요.</p>
                        </label>
                    </div>
                </div>

                <div>
                    <span>파일 첨부 내용</span>
                    <pre id="output"></pre>
                </div>
                <div>
                    <span>신청 사유</span>
                    <textarea placeholder="신청 사유를 입력하세요." onChange={e=>changeLibReason(e)} id="req-lib-reason"></textarea>
                </div>
                
            </div>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={checkForm}>신청</button>
                <button className="btn white-btn" onClick={removeForm} >초기화</button>
            </div>

        </section>
        </>
    )
}

export default JavaReq;