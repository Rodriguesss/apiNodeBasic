const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        teste : "ola mundo",
        teste2 : "tseteststse"
    });
});

module.exports = router;