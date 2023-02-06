const router = require("express").Router();

router.get("/", (req, res) => {
    res.status = 200;
    return res.json({success: true, msg: "Base route response"});
});

module.exports = router;
