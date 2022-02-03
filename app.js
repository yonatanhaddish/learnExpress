const express= require('express');

const app= express();

const mongoose= require('mongoose');
const env= require('dotenv/config');
app.use(express.json());

const userRoutes= require('./routes/user');
app.use('/', userRoutes);

app.listen('3000', () => {
    console.log("Server running at PORT 3000!");
});

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err.message);

    console.log('Database Connected!!!');
});
