var MongoClient = require('mongodb').MongoClient;
var DBurl = "mongodb://localhost:27017/";

var cust = { "records":[ {"Name":"Jim Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"M?xico D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquer?a","City":"M?xico D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B\'s Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbk?p","City":"Lule?","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel p?re et fils","City":"Strasbourg","Country":"France"}, {"Name":"B?lido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app\'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"M?xico D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Com?rcio Mineiro","City":"S?o Paulo","Country":"Brazil"} ] };

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