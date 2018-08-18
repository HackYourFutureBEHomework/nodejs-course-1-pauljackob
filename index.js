//1-
const express = require("express");
const server = express();

const port = 8000;

server.listen(port, ()=> {
    console.log(`server is running on localhost:${port}`);
})

server.get ("/:value", (request, response) => {

    response.send(request.params.value);
});

//2-
const express = require("express");
const server = express();

const port = 8000;

server.listen(port, ()=> {
   console.log(`server is running on localhost:${port}`);
})

server.get ("/:num1/plus/:num2/is", cal);

function cal (request, response) {
    const {num1 , num2} = request.params;
    const value = Number(num1) + Number(num2);
    response.send(`${value} `);
}

//3-
const express = require("express");
const converter = require('number-to-words');
const server = express();

const port = 8000;

server.listen(port, ()=> {
   console.log(`server is running on localhost:${port}`);
})

server.get ("/:num1/plus/:num2/is", cal);

function cal (request, response) {
    const {num1 , num2} = request.params;
    const value = Number(num1) + Number(num2);
    response.write(`${value}`);
    response.write(`${converter.toWords(value)}`);
    response.end();
}


//4- 
const express = require("express");
const server = express();

const port = 8000;

server.listen(port, ()=> {
   console.log(`server is running on localhost:${port}`);
})

server.get ("/:num1/plus/:num2/is", cal);

function cal (request, response, next) {
    const {num1 , num2} = request.params;
    const value = Number(num1) + Number(num2);
    response.send(`${value} `);
    if (value !== Number) return next(new Error('NaN'));
    next();
}

//5-
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'pauljackob911@hotmail.com',
    pass: 'my password'
  }
});

const mailOptions = {
  from: 'pauljackob911@hotmail.com',
  to: 'pauljackob911@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
