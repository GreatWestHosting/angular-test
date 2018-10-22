'use strict';
/**
 * References
 * @see https://github.com/mongodb/node-mongodb-native/#find-all-documents
 */

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const app = express();

/* Configuration settings */
const DBurl = "mongodb://localhost:27017/";
const port = 3000;

/* 
   Development - non compiled version 
   Designed to match output from grunt serve
*/
app.use(express.static('app'));
app.use(express.static('.tmp'));
app.use('/bower_components', express.static('./bower_components'));

console.log('Hi Jim');

var static_copy_of_cust;
// Need a promise
var db;

MongoClient.connect(
    DBurl, {
        useNewUrlParser: true
    },
    function (err, conn) {
        if (err) {
            return (err);
        }

        db = conn.db("customers");
        // toArray is Async
        //	  db.collection("static_copy_of_customer").find({}).toArray( (err,docs ) => { static_copy_of_cust = docs;});

        db.collection("customer").find({}).toArray(function (err, docs) {
            // When toArray finished do the following:
            static_copy_of_cust = docs;
            console.log('Data Loaded');
//          conn.close();
            return;
        });

    }
);

// API CAll
app.get('/customers',
    function (req, res) {

        res.jsonp(static_copy_of_cust);
    });
app.route('/customer/:id')
    .get(function (req, res) {
        var reqid = req.params.id; // Jim/Foo/Whatever
        reqid = '5bc76f2771049122449ba393'; // Test Mode
    
        var id = ObjectID.createFromHexString(reqid);
   
/*
    var idHex = document._id.toHexString();
Hex strings can be reverted back to binary (for example to perform queries) with ObjectID.createFromHexString

{_id: ObjectID.createFromHexString(idHex)}
*/
    console.log(db);
        db.collection("customer").find({'_id':id}).toArray(function (err, docs) {
            if (err) {
                res.send(err);
                return console.log(err)
            }
            
            console.log(id);
            res.send(id.getTimestamp());
        });
    
        // 1) connect to Mongo,
        // 2) pull record based on id = :id, 
        // 3) Return that record
        // Mockup
/*
        res.send(id +  {
            "_id": "5bc76f2771049122449ba393",
            "Name": "Jim Futterkiste",
            "City": "Berlin",
            "Country": "Germany"
        });
*/
    })
    .post(function (req, res) {
            var id = req.params.id;
            // 1) connect to Mongo,
            // 2) update record based on id = :id, 
            // 3) Return true/false
            // Mockup
            res.send(false);
        });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
