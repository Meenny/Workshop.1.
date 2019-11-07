var express = require('express');
var router = express.Router();
var Users = require('../model/user_data')
    /* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/feeling', (req, res, next) => {
    Users.find((err, data) => {
        res.render('ระบายความรู้สึก/view1.ejs', {
            data: data
        })
    })

})
router.post('/feeling', (req, res, next) => {
    var doc = new Users(req.body);
    doc.save()
    res.redirect('/users/feeling')
});

router.get('/encou', (req, res, next) => {
    res.render('ระบายความรู้สึก/view2.ejs')
});
module.exports = router;