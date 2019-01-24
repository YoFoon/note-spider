const express = require('express');
const router = express.Router();
const superagent = require('superagent');


router.get('/', function (req, res, next) {
    const chapterUrl = encodeURI(req.query.url);
    superagent.get('http://chapter2.zhuishushenqi.com/chapter/' + chapterUrl).end(function (err, response) {
        if (err) {
            throw err;
        } else {
            var data = JSON.parse(response.text).chapter;
            var con = JSON.stringify(response.body.chapter.body);
            res.render('chapter', {
                isShowNav: true,
                isShowCategory: true,
                title: req.query.chapters,
                chapters:req.query.chapters,
                content: con.replace(/\\n/g, '<br><br>'),
                prev:req.query.prev,
                next:req.query.next
            });
        }
    });
    // superagent.get('http://api.zhuishushenqi.com/toc/' + req.query.sourceId + '?view=chapters').end(function (err, response) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         let chapter = JSON.parse(response.text).chapters;
    //         res.render('chapter', {chapter: chapter})
    //     }
    // })
});
module.exports = router;
