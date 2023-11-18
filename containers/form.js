const express = require('express');

exports.form = (req,res) => {
    res.sendFile('public/index.html',{root: '.'});
}

exports.formprocess = (req,res) =>{
    console.log(req.body);
    res.write('<h1>Reservation Successful</h1>');
    res.write('<p>Name :</h2>'+req.body.name);
    res.write('<p>Email :</h2>'+req.body.mail);
    res.write('<p>Reservation Type :</h2>'+req.body.type);
    res.write('<p>Party Size :</h2>'+req.body.size);
    res.write('<p>Date :</h2>'+req.body.date);
    res.write('<p>Time :</h2>'+req.body.time);
    res.write('<h2><a href="">Return to Reservation Page?</a></h2>');
    res.write('<style>body{background:#ffecc0;display: flex;align-items: center;justify-content: center;background-color: #ffecc0;height: 100vh;flex-direction: column;}h1{font-size: 3rem;font-weight: 600;border: black 2px solid;padding: 2rem;border-radius: 2rem;}h2{ font-size: 1.5rem;}p{ font-size: 1rem;}@media screen and (max-aspect-ratio: 1150/800){h2,p{scale:2;}h1{scale:1.5;}}<style>');
    res.end();
}
