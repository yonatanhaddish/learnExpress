const express= require('express');
const router= express.Router();

router.get('/home', (req, res) => {
    res.json({
        body: {
            user: "User_01",
            message: 'Home API'

        }
    });
});

router.post('/add', (req, res) => {
    res.json(req.body);
    console.log(req.body);
});

module.exports= router;