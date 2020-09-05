const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send("Server está no ar e rodando");
});

module.exports = router;