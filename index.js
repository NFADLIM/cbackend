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
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/home.html'));
});

app.post('/login', function(request, response) {
	//let username = request.body.username;
	let email = request.body.email;
	let password = request.body.password;
	if (email && password) {
		db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
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
app.put('/Update', function(req, response) {
	const id = req.params.id;  
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
      
      const sqlQuery = " UPDATE users SET username = ?, email = ?, password = ? WHERE id = 1";
      
      db.query(sqlQuery, [username, email, password, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
		  response.send('updated');
		  response.end();
        }
      });
});
app.get ('/akun', function(req, res) {
	const sqlQuery = "SELECT * FROM users";

	db.query(sqlQuery, (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
		console.log(result);
	  }
	});
});

app.get('/edit',(request,response) => {
if (request.session.loggedin) {
  response.send('Welcome back, ' + request.session.email + '!');
app.use(fasilitasroute);
app.use(gedungroute);

} else {
  response.send('Please login to view this page!');
}
response.end();

});



app.use(function(req, res, next) {
	next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
  
	// render the error page
	res.status(err.status || 500);
	res.render('error');
  });
  
app.listen(3000, () => {
    console.log('server berhasil berjalan pada port 3000!');
  });
 //app.use(gambarroute);