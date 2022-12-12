const express = require('express');
const cookieParser = require("cookie-parser");

const router = require('./routes/web');
const dbConnect = require('./database/connection');

const app = express();
const PORT = 3000;
const DATABASE_URL = 'mongodb://localhost:27017/ums';

dbConnect.connectDb(DATABASE_URL);

// Linking the static files via express.static() middleware

app.use(express.static('public'));

// app.use(express.bodyParser());
app.use(express.urlencoded());

app.use(router);

app.use(express.json())

app.use(cookieParser());


app.listen(PORT, (error) => {
    if (!error){
        console.log(`Server is successfully running on port ${PORT}`);
    }
    else{
        console.log("Unexpected error occurred, server can't be started");
    }
});