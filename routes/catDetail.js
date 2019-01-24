const express = require('express');
const router = express.Router();
const superagent = require('superagent');

router.get('/', function (req, res, next) {
    const gender=req.query.gender;
    const mayjor=req.query.mayjor;
    console.log(gender,mayjor)
    superagent.get('http://api.zhuishushenqi.com/book/by-categories?gender=' + req.query.gender + '&type=hot&major=' + encodeURI(req.query.mayjor) + '&minor=&start=0&limit=50').end(function (err, response) {
        if (err) {
            res.send('Ops!找不到页面！')
        } else {
            res.render('catDetail', {
                isShowNav:true,
                isShowCategory:false,
                title: mayjor+'热门榜单',
                content: JSON.parse(response.text)
            });
        }
    });
});
module.exports = router;