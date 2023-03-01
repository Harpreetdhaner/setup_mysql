var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql')
const config = require('./config/config.json');
const {sequelize} = require('./models/')
const Contact = require('./models/newUser')
sequelize

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addUserRouter = require('./routes/addUser')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter,addUserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const connection = mysql.createConnection(
  {
    host:config.development.host,
    dialect:config.development.dialect,
    database:config.development.database,
    user: config.development.username,
    password: config.development.password
  }
)
connection.connect((err)=>{
  if(err){
    console.log('error cannnot connect'+err.stack)
  }else{
    console.log('connected'+connection.threadId);
  }
})
 Contact.sync({alter:true})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
