const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3787;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended : true
    })
)

app.post('/login', db.login);
app.post('/user/main', db.userMain);
app.post('/admin/main', db.adminMain);


app.listen(port, ()=> {
    console.log(`App runnint on port ${port}.`);
})