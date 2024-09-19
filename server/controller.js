import db from './db.js';

// 獲取name資料
export const getName = async (req, res) => {
    try {
        console.log("== getName ==");
        db.query('SELECT name from userTable', function (error, data) {
            if (error) throw error;
            res.status(200).json(data); // json方式
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

// 獲取number資料
export const getNumber = async (req, res) => {
    try {
        console.log("== getNumber ==");
        db.query('SELECT number from userTable', function (error, data) {
            if (error) throw error;
            res.status(200).send(data); // 直接傳送
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}