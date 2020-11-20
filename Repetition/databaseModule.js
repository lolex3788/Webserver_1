const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("We are connected!")
});

const messagePostSchema = new mongoose.Schema({
    name: String,
    message: String,
});

const MessagePost = mongoose.model('MessagePost', messagePostSchema);


exports.saveData = function (name, message){
    let newMessagePost = new MessagePost({
    name: name,
    message: message
    });
    newMessagePost.save()
}


