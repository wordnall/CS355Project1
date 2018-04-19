var mysql = require('mysql');
var db = require('./db_connection');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'CALL stadium_getall()';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO stadium (team_name, address, stadium_name) VALUES (?, ?, ?)';

    var queryData = [params.team_name, params.address, params.stadium_name];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};