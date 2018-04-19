var express = require('express');
var router = express.Router();
var stadium_dal = require('../dal/stadium_dal');
var team_dal = require('../dal/team_dal');

router.get('/all', function(req, res, next) {
    stadium_dal.getAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('stadium/stadium_view_all', {stadiums: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    team_dal.getAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('stadium/stadium_add', {team_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res){
    stadium_dal.insert(req.query, function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.redirect(302, '/stadium/all');
        }
    });
});


module.exports = router;