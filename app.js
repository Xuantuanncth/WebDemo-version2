const createError = require('http-errors');
const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const session = require('express-session');
const { Server } = require('socket.io');
const hbs = require('hbs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const displayRouter = require('./routes/display');
const controlDevice = require('./routes/control');
const chartData = require('./routes/chart');
const settingTime = require('./routes/settingTime');


const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;

// setup session
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: oneDay }
}))

// view engine setup

const partialsPath = path.join(__dirname + '/views/partials')
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath)

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/display', displayRouter);
app.use('/control', controlDevice);
app.use('/setting', settingTime);
app.use('/chart', chartData);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });


io.on('connection', (socket) => {
    console.log('New socket connection');

    socket.on('join', (option, callback) => {
        console.log(`ID: ${socket.id} , Data: ${option.data}`);
    })


    socket.on('disconnect', () => {
        console.log(`User disconnect ${socket.id}`)
    })

})

server.listen(port, () => {
    console.log(`Server start up on port ${port}`);
})