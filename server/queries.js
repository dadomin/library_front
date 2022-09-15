const Pool = require('pg').Pool;
const pool = new Pool(require('./config/dbConfig.js'));

const login = (req, res) => {
    const {id, pw} = req.body;
    pool.query('select * from users where user_id = $1 and passwd = $2', [id, pw], (error, result)=> {
        if(error) {
            throw error;
        }
        res.status(200).json(result.rows);
        console.log(result.rows);
    })
}

const userMain = (req,res) => {
    const {userId} = req.body;
    const query = "select cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7, cnt8, cnt9, cnt10, cnt11, cnt12, cnt13 from " +
    "(select count(*) as cnt1 from user_lib_rel where req_user_id = $1) data1, "+
    "(select count(*) as cnt2 from user_lib_rel where req_user_id = $1 and lib_kind = 'Python') data2, " +
    "(select count(*) as cnt3 from user_lib_rel where req_user_id = $1 and lib_kind = 'Java') data3," +
    "(select count(*) as cnt4 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '요청' and a.lib_id = b.id) data4,"+
    "(select count(*) as cnt5 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '승인' and a.lib_id = b.id) data5,"+
    "(select count(*) as cnt6 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '반려' and a.lib_id = b.id) data6,"+
    "(select count(*) as cnt7 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '완료' and a.lib_id = b.id) data7,"+
    "(select count(*) as cnt8 from user_lib_rel a, py_lib_mg b where a.req_user_id = $1 and b.imp_status = '실패' and a.lib_id = b.id) data8,"+
    "(select count(*) as cnt9 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '요청' and a.lib_id = b.id) data9,"+
    "(select count(*) as cnt10 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '승인' and a.lib_id = b.id) data10,"+
    "(select count(*) as cnt11 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '반려' and a.lib_id = b.id) data11,"+
    "(select count(*) as cnt12 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '완료' and a.lib_id = b.id) data12,"+
    "(select count(*) as cnt13 from user_lib_rel a, jv_lib_mg b where a.req_user_id = $1 and b.imp_status = '실패' and a.lib_id = b.id) data13";
    pool.query(query,[userId],(error, results) => {
        if(error) { 
            throw error;
        }

        res.status(200).json(results);
        console.log(results.rows);
    })
}

const adminMain = (req,res) => {

    const query = "select cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7, cnt8, cnt9, cnt10, cnt11, cnt12, cnt13 from " +
    "(select count(*) as cnt1 from user_lib_rel ) data1, "+
    "(select count(*) as cnt2 from user_lib_rel where lib_kind = 'Python') data2, " +
    "(select count(*) as cnt3 from user_lib_rel where lib_kind = 'Java') data3," +
    "(select count(*) as cnt4 from user_lib_rel a, py_lib_mg b where b.imp_status = '요청' and a.lib_id = b.id) data4,"+
    "(select count(*) as cnt5 from user_lib_rel a, py_lib_mg b where b.imp_status = '승인' and a.lib_id = b.id) data5,"+
    "(select count(*) as cnt6 from user_lib_rel a, py_lib_mg b where b.imp_status = '반려' and a.lib_id = b.id) data6,"+
    "(select count(*) as cnt7 from user_lib_rel a, py_lib_mg b where b.imp_status = '완료' and a.lib_id = b.id) data7,"+
    "(select count(*) as cnt8 from user_lib_rel a, py_lib_mg b where b.imp_status = '실패' and a.lib_id = b.id) data8,"+
    "(select count(*) as cnt9 from user_lib_rel a, jv_lib_mg b where b.imp_status = '요청' and a.lib_id = b.id) data9,"+
    "(select count(*) as cnt10 from user_lib_rel a, jv_lib_mg b where b.imp_status = '승인' and a.lib_id = b.id) data10,"+
    "(select count(*) as cnt11 from user_lib_rel a, jv_lib_mg b where b.imp_status = '반려' and a.lib_id = b.id) data11,"+
    "(select count(*) as cnt12 from user_lib_rel a, jv_lib_mg b where b.imp_status = '완료' and a.lib_id = b.id) data12,"+
    "(select count(*) as cnt13 from user_lib_rel a, jv_lib_mg b where b.imp_status = '실패' and a.lib_id = b.id) data13";
    pool.query(query,(error, results) => {
        if(error) { 
            throw error;
        }

        res.status(200).json(results);
        console.log(results.rows);
    })
    
}

module.exports = {
    login,
    userMain,
    adminMain
}