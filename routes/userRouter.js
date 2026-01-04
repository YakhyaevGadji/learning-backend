const Router = require('express');
const router = new Router();


router.get('/auth', (req, res) => {
    res.json({message: "user auth"});
});

module.exports = router;