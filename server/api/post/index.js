var express    = require('express');
var controller = require('./post.controller');
var router     = express.Router();

router.get('/latest'  , controller.getLatest);
router.get('/:url_id'  , controller.findByUrlId);
router.get('/'        , controller.find     );

module.exports = router;