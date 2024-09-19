import db from './db.js';
import router from './router.js';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express(); // express 引入的是一個 function
const port = process.env.PORT || 7777;; // 建立一個不易產生衝突的 port 用來測試


// 建立路由
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/api', router);


// database連線
db.connect(function(error) {
    if (error) throw error;
    console.log("Database Connected!!!");
});

db.query('SELECT name from userTable', function (error, data) {
    if (error) throw error;
    console.log(data);
});

// 運行這個 port，參數分別為 port 和要執行的 function
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})