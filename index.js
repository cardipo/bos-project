'use strict';
const express = require('express');
const connection = require('./src/db/index');
const app=express();
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.send('Hello test!'))

app.listen(3000,()=>{console.log('running on port 3000')});




    




