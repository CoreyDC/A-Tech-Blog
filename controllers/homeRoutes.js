const router = require('express').Router();
const { response } = require('express');

router.get('/', async (req, res) => {
    try {
        res.render('frontPage');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;