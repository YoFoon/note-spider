const express = require('express');
const router = express.Router();
const superagent = require('superagent');

router.get('/', function (req, res, next) {
    const getUrl = encodeURI('http://api.zhuishushenqi.com/book/fuzzy-search?query=' + req.query.search);
    superagent.get(getUrl).end(function (err, response) {
        if (err) {
            res.send('Ops!找不到页面！')
        } else {
            res.render('searchResult', {
                isShowNav:true,
                isShowCategory:false,
                title: req.query.search,
                content: JSON.parse(response.text),
                search: req.query.search
            })
        }
    })
});
module.exports = router;