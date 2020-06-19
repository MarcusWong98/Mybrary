if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();



app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index');
})

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error)=> console.error('Error : '+ error));
db.once('open',()=>console.log('Connected to Mongodb'));





app.listen(process.env.PORT|| 3000);