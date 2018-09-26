const express = require('express')
const app = express()
const port = 3000

// Mount Angular static files
app.use(express.static('dist'));

var cust =[ { "records":[ {"Name":"Jim Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B\'s Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app\'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"} ] }];

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,  { useNewUrlParser: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
  // if (err) throw err;
  db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true } , function(err, db) {
  // if (err) throw err;
  if(err) return(err);
  var dbo = db.db("mydb");
  var myobj = cust;
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

// API CAll
app.get('/customers', (req, res) => res.send( JSON.stringify(cust) ));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
