
const express = require('express');
const app = express();

// 中间件用于解析请求的 JSON 数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 添加 cors 中间件
const cors = require('cors');
app.use(cors({ credentials: true, origin: true }));

// 设置cookie问题
var cookieParser = require('cookie-parser');
app.use(cookieParser())

// 应用中间件
const responseHandler = require("./modules/responseHandler")
app.use(responseHandler);

// 用来生成客户端需要的token
const generateToken = require("./modules/generateToken")

const refreshTokenRouter = require("./modules/refreshTokenRouter")

const coon = require("./db/conn_sql")


app.get('/getdata', async (req, res) => {
    try {
        const sql = `SELECT * FROM test`
        coon.query(sql, (err, res) => {
            if (err) {
                console.log("错误", err);
            }
            console.log(res, 'res');
        })

    } catch (error) {
        console.error('Error executing query:', error)
        res.status(500).send('Internal Server Error')
    }
})




app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {

        const user = {
            id: 1,
            username: 'admin',
            role: ["admin"]
        };
        const token = generateToken(user.id, user.role);
        const expires = Date.now() + 60 * 60 * 2
        const message = "登陆成功"
        let data = {
            ...user, token, expires, message
        }
        res.success(data);
    }
});

app.get('/table/data', (req, res) => {
    // Handle the GET request
    const data = {
        message: 'Hello, world!',
        timestamp: new Date().toISOString()
    };

    res.json(data);
});

// 错误处理中间件
app.use((err, req, res, next) => {
    res.error(err.message);
});

const infoRouter = require("./router/userInfo")
app.use(infoRouter)

const port = 8099; // 或你想要监听的端口号
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});