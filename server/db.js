// 引入 mysql 模組
import mysql from 'mysql';

// 建立連線
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '880301',
    database: 'testtable',
    port: 3306,
  });

export default db;