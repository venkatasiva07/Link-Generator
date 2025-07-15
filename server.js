const express = require('express');
const connectDB= require('./config/db');
const path = require('path');
const app =express();
connectDB();
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

const PORT= process.env.PORT || 3000 ;

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));

app.use('/files/download', require('./routes/download'));



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})