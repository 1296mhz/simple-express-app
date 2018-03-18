var express = require('express');
var router = express.Router();
/* GET notes page. */
router.get('/', function (req, res, next) {
    res.render('notes', { title: 'Notes' });
});

/* POST hotes page */
router.post('/', function (req, res, next) {
    res.json({ message: "response"});
});

/* PUT notes page */
router.put('/', function (req, res, next) {
    res.json({ message: "response"});
});

/* DELETE notes page*/
router.delete('/', function (req, res, next) {
    res.json({ message: "response"});
});

module.exports = router;
