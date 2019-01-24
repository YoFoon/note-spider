const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.render('index', {
    isShowNav: true,
    isShowCategory: false,
    title: '首页',
    subtitle: '<small>请搜索您想看的小说</small>',
    content: '请搜索'
  })
})
module.exports = router
