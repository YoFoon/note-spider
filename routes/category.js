var express = require('express');
var router = express.Router();
var superagent = require('superagent');

router.get('/', function(req, res) {
    superagent.get('http://api.zhuishushenqi.com/toc/'+req.query.sourceId+'?view=chapters').end(function(err, response) {
        if (err) {
            res.redirect('/index')
        } else {
            res.render('category',{
                isShowNav:true,
                isShowCategory:false,
                title:req.query.name,
                content:JSON.parse(response.text).chapters,
                sourceId:req.query.sourceId,
                author:req.query.author
            });
        }
    });
});

module.exports = router;
