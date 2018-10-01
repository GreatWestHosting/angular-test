/**
 * References
 * @see https://github.com/mongodb/node-mongodb-native/#find-all-documents
 */

const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var DBurl = "mongodb://localhost:27017/";
const app = express();
const port = 3000;

app.use(express.static('dist'));

console.log('Hi Jim');

var cust;
// Need a promise

MongoClient.connect(
  DBurl,
  { useNewUrlParser: true } , 
  function(err, conn) {
	  if(err) return(err);
	  
	  var db = conn.db("customers");
	  // toArray is Async
//	  db.collection("customer").find({}).toArray( (err,docs ) => { cust = docs;});
	  db.collection("customer").find({}).toArray( function(err,docs ) {
	    // When toArray finished do the following:
	    cust = docs;}
	  );
	  console.log(cust);
      conn.close();
  }
);

// API CAll
app.get('/customers', 
	function(req, res) {
		res.jsonp(cust);
	});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
