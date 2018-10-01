const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var DBurl = "mongodb://localhost:27017/";
const app = express();
const port = 3000;

app.use(express.static('dist'));
var cust = { "records":[ {"Name":"Jim Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B\'s Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app\'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"} ] };

MongoClient.connect(DBurl, { useNewUrlParser: true } , 
  function(err, conn) {
	  if(err) return(err);
	  var myobj = cust.records;
	  var db = conn.db("customers");
	  db.collection("customer").insertMany(myobj, function(err, res) {
	    if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
	  });
      conn.close();
  }
);

// API CAll
app.get('/customers', (req, res) => res.send( JSON.stringify(cust) ));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
