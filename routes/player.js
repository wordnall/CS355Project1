var express = require('express');
var router = express.Router();
var player_dal = require('../dal/player_dal');
var team_dal = require('../dal/team_dal');

router.get('/all', function(req, res, next) {
    player_dal.getAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('player/player_view_all', {players: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('player/player_add');
});

router.get('/insert', function(req, res){
    player_dal.insert(req.query, function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.redirect(302, '/player/all');
        }
    });
});

router.get('/stats', function(req, res){
    player_dal.getAllStats(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('player/player_view_all_total_stats', {players: result[0]})
        }
    });
});

router.get('/add_team', function(req, res){
    player_dal.player_team_getall(req.query.player_id, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('player/player_add_team', {player: result[0][0], team_results: result[1]})
        }
    });
});


router.get('/associate_team', function(req, res){
    player_dal.associate_team(req.query, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.redirect(302, '/player/all');
        }
    });
});

router.get('/add_position', function(req, res){
    player_dal.player_position_getall(req.query.player_id, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.render('player/player_add_position', {player: result[0][0], positions: result[1]})
        }
    });
});

router.get('/associate_position', function(req, res){
    player_dal.associate_position(req.query, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.redirect(302, '/player/all');
        }
    });
});

module.exports = router;