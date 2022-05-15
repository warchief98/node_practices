var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) console.log(err);
    console.log("Database created!");
    // db.close();??
});