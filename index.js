const { db } = require('./db');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app = express();
const jwt = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const fasilitasroute = require ('./fasilitasroute');
const gedungroute = require ('./gedungroute');
const gambarroute = require ('./gambarroute');
const loginrouter = require ('./loginrouter');

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "tokenkey123445",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());

const myusername = 'Thisadmin1'
const mypass = 'admin12345'

var session;

app.get('/',(req,res) => {
  session=req.session;
  if(session.userid){
      res.send("Welcome User ");
  }else
  res.sendFile('./home.html',{root:__dirname})

});

app.post('/login',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypass){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  }
  else{
      res.send('Invalid username or password');
  }
});

app.get('/edit',(req,res) => {
  session=req.session;
  if(session.userid){
    app.use(fasilitasroute);
    app.use(gedungroute);
      res.send("Welcome User ");
  }else
  res.sendFile('./home.html',{root:__dirname})

});

app.use(fasilitasroute);
app.use(gedungroute);
app.use(gambarroute);

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});
app.listen(3000, () => {
    console.log('server berhasil berjalan pada port 3000!');
  });
 