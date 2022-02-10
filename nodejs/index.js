const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());

app.use('/employees', employeeController);




app.listen(5000, ()=> {
    console.log(`Server started at port: 5000`);
});
