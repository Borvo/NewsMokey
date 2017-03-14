var mongodb = require('mongodb');

// Connection URL
var url = 'mongodb://localhost:27017/NewsMonkey';

var MongoClient = require('mongodb').MongoClient;
var db;

// Use connect method to connect to the server
var connect=function(){
    MongoClient.connect("mongodb://localhost:27017/NewsMonkey", function(err, database) {
        if(err) throw err;
        console.log("connesso al database");
        return database;
    });
};

var insertOne=function(collection,obj){
    db=connect();

    db.collection(collection).insertOne(obj, function(err, r) {
        if (err) return err;
    });
    db.close();
};

var update=function(collection,obj,attribute){
    db=connect();

    db.collection(collection).updateOne(attribute, {$set: obj}, function(err, r) {
        if (err) throw err;
    });
    db.close();
};

var read=function(collection,obj,limit){
    db=connect();

    db.collection(collection).find(obj).limit(limit).toArray(function(err, docs) {
        return docs;
    });
    db.close();
};



