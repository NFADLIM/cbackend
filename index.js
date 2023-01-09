const { db } = require('./db');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app = express();
const path = require('path');
const fasilitasroute = require ('./fasilitasroute');
const gedungroute = require ('./gedungroute');



const oneDay = 1000 * 60 * 60 * 24;



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());

app.use(fasilitasroute);
app.use(gedungroute);

app.use(sessions({
  secret: "tokenkey123445",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));
//app.get('/', function(request, response) {
//	response.sendFile(path.join(__dirname + '/login.html'));
//});

app.post('/', function(request, response) {
	let username = request.body.username;
	let password = request.body.password;
	if (username && password) {
		db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/edit');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/edit',(request,response) => {
if (request.session.loggedin) {
  response.send('Welcome back, ' + request.session.username + '!');
app.use(fasilitasroute);
app.use(gedungroute);

} else {
  response.send('Please login to view this page!');
}
response.end();

});


app.listen(3000, () => {
    console.log('server berhasil berjalan pada port 3000!');
  });
 //app.use(gambarroute);