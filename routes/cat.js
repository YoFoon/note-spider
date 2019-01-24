const express = require('express');
const router = express.Router();
const superagent = require('superagent');


router.get('/', function (req, res, next) {
    superagent.get('http://api.zhuishushenqi.com/cats/lv2/statistics').end(function (err, response) {
        if (err) {
            throw err;
        } else {
            const data = JSON.parse(response.text);
            res.render('cat', {
                isShowNav:true,
                isShowCategory:false,
                title: '分类',
                content: data
            });
        }
    });
});
module.exports = router;
