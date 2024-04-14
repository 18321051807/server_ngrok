
const mysql = require("mysql")
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port: '3306',
    database: 'demo'
});

const bdbs = (sql, values) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, values, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
       
    })
}

//导出
module.exports = conn;
