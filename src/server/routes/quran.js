const { http } = require("../utils/http");
const router = require("express").Router();

// get all surahs
router.get("/meta", (req, res) => {
    http('/meta').then(response => {
        res.json(response.data)
    })
});

module.exports = router;
