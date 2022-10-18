const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bekzod-Malikov' });
});

router.get('/all', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/login', (req,res)=>{
  res.render('login', { title: 'login' }) 
})

router.get('/nav', (req,res)=>{
  res.render('nav', { title: 'Bekzod Malikov' }) 
})


module.exports = router;

//G1jqQMUjEmlccqdG