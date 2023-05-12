const router = require('express').Router();
const { response } = require('express');

// ROUTE TO GET HOME PAGE
router.get('/', async (req, res) => {
    try {
        res.render('homePage');
    } 
    catch (err) {
        res.status(500).json(err);
    }
});

// ROUTE TO GET LOGIN PAGE
router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } 
    catch {
        res.status(500).json(err);
    }
});

// ROUTER TO GET SIGNUP PAGE
router.get('/signup', async (req, res) => {
    try {
        res.render('signUp')
    } 
    catch {
        res.status(500).json(err);
    }
});
module.exports = router;