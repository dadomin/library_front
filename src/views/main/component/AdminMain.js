import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const AdminMain = (props) => {
    const user = props.user;
    const now = props.now;
    const [data, setData] = useState({});

    useEffect(()=> {
        axios
        .post('http://localhost:3787/admin/main')
        .then((res)=> {
            console.log(res.data.rows[0]);
            setData(res.data.rows[0])
        })
    }, [])
    return(
        
       <section id="main">
       <div className="main-section">
           <h1>요청받은 총 Library 갯수</h1>
           <div className="main-detail">
               <div>
                   <p>Total</p>
                   <h1><span>{data.cnt1}</span>건</h1>
                   <h2>{data.cnt1}</h2>
               </div>
               
               <div>
                   <p>Python Library</p>
                   <h1><span>{data.cnt2}</span>건</h1>
                   <h2>{data.cnt2}</h2>
               </div>

               <div>
                   <p>Java Library</p>
                   <h1><span>{data.cnt3}</span>건</h1>
                   <h2>{data.cnt3}</h2>
               </div>
           </div>
       </div>

       <div className="main-section">
           <h1>요청받은 Python Library</h1>
           <div className="main-detail">
               <div>
                   <p>신청</p>
                   <h1><span>{data.cnt4}</span>건</h1>
                   <h2>{data.cnt4}</h2>
               </div>
               
               <div>
                   <p>승인</p>
                   <h1><span>{data.cnt5}</span>건</h1>
                   <h2>{data.cnt5}</h2>
               </div>

               <div>
                   <p>반려</p>
                   <h1><span>{data.cnt6}</span>건</h1>
                   <h2>{data.cnt6}</h2>
               </div>
               
               <div>
                   <p>완료</p>
                   <h1><span>{data.cnt7}</span>건</h1>
                   <h2>{data.cnt7}</h2>
               </div>
               
               <div>
                   <p>실패</p>
                   <h1><span>{data.cnt8}</span>건</h1>
                   <h2>{data.cnt8}</h2>
               </div>
           </div>
       </div>

       <div className="main-section">
           <h1>요청받은 Java Library</h1>
           <div className="main-detail">
               <div>
                   <p>신청</p>
                   <h1><span>{data.cnt9}</span>건</h1>
                   <h2>{data.cnt9}</h2>
               </div> 
               
               <div>
                   <p>승인</p>
                   <h1><span>{data.cnt10}</span>건</h1>
                   <h2>{data.cnt10}</h2>
               </div>

               <div>
                   <p>반려</p>
                   <h1><span>{data.cnt11}</span>건</h1>
                   <h2>{data.cnt11}</h2>
               </div>
               
               <div>
                   <p>완료</p>
                   <h1><span>{data.cnt12}</span>건</h1>
                   <h2>{data.cnt12}</h2>
               </div>
               
               <div>
                   <p>실패</p>
                   <h1><span>{data.cnt13}</span>건</h1>
                   <h2>{data.cnt13}</h2>
               </div>
           </div>
       </div>
   </section>
    )
}

export default AdminMain;