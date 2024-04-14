// 导入数据库操作模块
// const db = require("../db/index");

// 获取用户信息的处理函数
exports.getAllInfor = (req, res) => {
    // 定义查询的sql语句
    const sql = "select * from user_infor";
    // 执行sql语句
    // db.query(sql, (err, results) => {
    //     // 执行sql语句失败
    //     if (err) return res.output(err);
    //     // 执行成功
    //     res.output("查询成功", 0, results);
    // });
    // res.output("查询成功", 0, []);
    let data = [{ name: '1' }]
    res.success(data);

};

// 通过id查找用户name,处理函数
exports.getNameById = (req, res) => {
    // 定义sql语句
    const sql = "select name from user_infor where id=?";
    // 执行sql语句，req获取从前端传的值
    // db.query(sql, req.body.id, (err, results) => {
    //     // 执行sql语句失败
    //     if (err) return res.output(err);
    //     // 执行成功，但数据长度为0，执行失败
    //     if (results.length !== 1) return res.output("无数据");
    //     // 执行成功
    //     res.output("执行成功!", 0, results);
    // });
    // res.output("执行成功!", 0, []);
    let data = [{ name: '2' }]
    res.success(data);

};