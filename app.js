const express = require("express");
const app = express();

const baseRouter = require('./src/routers/base.router.js');

app.get("/", (req, res) => {
    res.status(200);
    return res.json({success: true, msg: "I'm up!"});
});

app.use('/base', baseRouter);

module.exports = app;