var express = require('express');
var router = express.Router();
var team_dal = require('../dal/team_dal');

router.get('/all', function(req, res, next) {
    team_dal.getAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('team/team_view_all', {teams: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('team/team_add');
});

router.get('/insert', function(req, res){
   team_dal.insert(req.query, function(err, result){
       if(err){
           console.log(err);
           res.send(err);
       }else{
           res.redirect(302, '/team/all');
       }
   });
});


module.exports = router;