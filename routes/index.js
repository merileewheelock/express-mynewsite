var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var students = ['Marissa', 'Merilee', 'Chris', 'Stephen', 'Chad', 'Shane', 'Ian', 'Drew', 'Guido', 'YingRong', 'Carla', 'Porscha', 'Daniel', 'Nick', 'Hayes', 'Michael'];
	res.render('index', { 
		students: students
	});
});

router.get('/reverse', function(req, res, next) {
	var students = ['Marissa', 'Merilee', 'Chris', 'Stephen', 'Chad', 'Shane', 'Ian', 'Drew', 'Guido', 'YingRong', 'Carla', 'Porscha', 'Daniel', 'Nick', 'Hayes', 'Michael'];
	var studentsReverse = students.reverse();
	res.render('reverse', { 
		studentsReverse: studentsReverse
	});
});

router.get('/pictionary', function(req, res, next) {
	res.render('pictionary', { Title: 'Pictionary' });
});

module.exports = router;
