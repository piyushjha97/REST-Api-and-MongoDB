const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');

require('dotenv/config');


app.use(bodyParser.json());

app.use('/posts',postsRoute);  //creating middleware.

app.get('/',(req,res) => {
	console.log("happy club");
});
 

app.listen(3000);

//connect to DB:

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true , useUnifiedTopology: true }, () =>
	console.log("DB connected"));

