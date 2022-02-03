const express= require('express');
const User = require('../models/User');
const router= express.Router();

// getting all users
router.get('/', async (req, res) => {
    try {
        const users= await User.find();
        res.json(users);
    }
    catch(err) {
        res.status(500).send();
    }
});

// creating a new User
router.post("/", async (req, res) => {
    try {
        const { name, email, password }= req.body;

        const newUser= new User({ name, email, password });
        
        const savedUser= await newUser.save();

        res.json(savedUser);
    }
    catch(err) {
        res.status(500).send();
    }
});

// deleting a user by a specific id
router.delete("/:id", async (req, res) => {
    try {
        const userId= req.params.id;

        if (!userId)
            return res.status(400).json({errorMessge: 'User id not given. Please contact the developer.'});

        const existingUser= await User.findById(userId);

        if (!existingUser)
            return res.status(400).json({errorMessge: 'No user with this id provided. Please contact the developer.'});

        await existingUser.delete();

        res.json(existingUser);
    }
    catch(err) {
    res.status(500).send();
    }
});

module.exports= router;