const express= require('express');

express().listen('3000', () => {
    console.log("Server running at PORT 3000!");
});