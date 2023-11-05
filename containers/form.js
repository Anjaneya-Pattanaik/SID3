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
    res.end();
}