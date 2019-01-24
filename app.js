const express = require('express');
const superagent = require('superagent');
const path = require('path');
const cheerio = require('cheerio');
const index = require('./routes/index');
const chapter = require('./routes/chapter');
const category = require('./routes/category');
const searchResult = require('./routes/searchResult');
const sources = require('./routes/sources');
const cat = require('./routes/cat');
const catDetail = require('./routes/catDetail');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.use('', index);
app.use('/index', index);
app.use('/chapter', chapter);
app.use('/category', category);
app.use('/searchResult', searchResult);
app.use('/sources', sources);
app.use('/cat', cat);
app.use('/catDetail',catDetail);

app.listen(8089, function () {
    console.log('listening 8089')
});