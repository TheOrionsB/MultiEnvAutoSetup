const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

const baseRouter = require('./src/routers/base.router.js');

app.get("/", (req, res) => {
    res.status(200);
    return res.json({success: true, msg: "I'm up!"});
});

app.use('/base', baseRouter);

app.listen(PORT, () => {
  console.log(`* Server listening on http://localhost:${PORT}`);
});
