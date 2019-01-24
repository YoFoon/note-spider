const express = require('express');
const router = express.Router();
const superagent = require('superagent');

router.get('/', function (req, res, next) {
    superagent.get('http://api.zhuishushenqi.com/toc?view=summary&book=' + req.query.id).end(function (err, response) {
        if (err) {
            res.send('Ops!找不到页面！')
        } else {
            res.render('sources', {
                title:req.query.name,
                isShowNav:true,
                isShowCategory:false,
                author: req.query.author,
                content: JSON.parse(response.text)
            });
        }
    })
});
module.exports = router;