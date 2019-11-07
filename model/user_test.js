const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin1234:admin1234@cluster0-dyr0p.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const mongoose = require('mongoose').Schema();
client.connect(err => {
    const collection = client.db("My_data").collection("user_dbs");
    console.log('connect')
        // perform actions on the collection object
    var user = { name: "meen", email: "meennausak@gmail.com", text: "เพื่อน", phonenumber: "0990398285" }

    collection.insertOne(user, function(err, res) {
        console.log('success!');

    })
    client.close();
});