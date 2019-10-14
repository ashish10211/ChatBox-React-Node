var express = require('express');
var router = express.Router();
const app = express();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
var arrayData = [ 'Nice to Talk to you', 'Sorry I am not AI enabled bot ', 'What is happening ?','Is everything good','This is dummy random data','Keep sending messages' ];

router.get('/', function(req, res, next) {
	var random = Math.floor(Math.random() * 5);
    res.send(arrayData[random]);
    console.log(random);

});
router.post('/', (req, res) => {
	console.log(req.body.message);
	//can use this data receieved for any other purpose
});

module.exports = router;