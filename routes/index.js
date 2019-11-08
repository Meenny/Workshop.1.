var express = require('express');
var router = express.Router();
var User = require('../model/user')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/depression', (req, res, next) => {
    res.render('เกร็ดความรู้/depression.ejs')
})
router.get('/Cause', (req, res, next) => {
    res.render('เกร็ดความรู้/cause.ejs')
})
router.get('/depressions', (req, res, next) => {
    res.render('เกร็ดความรู้/depressions.ejs')
})
router.get('/treatment', (req, res, next) => {
    res.render('เกร็ดความรู้/treatment')
})
router.get('/test', (req, res, next) => {
    res.render('test')
})
router.get('/trust', (req, res, next) => {
    User.find((err, data) => {
        res.render('Trust', {
            data: data
        })
    })

})
router.post('/trust', (req, res, next) => {
    var doc = new User(req.body);
    doc.save()
    res.redirect('/trust')
    res.redirect('/trust')
})
router.get('/monk', (req, res, next) => {
    res.render('view3')
})
router.get('/exercise', (req, res, next) => {
    res.render('view4')
})
router.get('/music', (req, res, next) => {
    res.render('view5')
})
router.get('/buddhism', (req, res, next) => {
    res.render('bud')
})
router.get('/Christianity', (req, res, next) => {
    res.render('bud2')
})
router.get('/Islam', (req, res, next) => {
    res.render('bud3')
})
router.get('/call', (req, res, next) => {
    res.render('end')
})


module.exports = router;