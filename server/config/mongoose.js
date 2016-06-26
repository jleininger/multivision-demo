var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course');

module.exports = function(config) {
    //Connection to the MongoDB database
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('multivision db opened');
    });

    userModel.createDefaultUsers();
    courseModel.createDefaultCourses();

    //Grabbing a message from the database to pass to the view
    //var messageSchema = mongoose.Schema({message: String});
    //var Message = mongoose.model('Message', messageSchema);
    //var mongoMessage;
    //Message.findOne().exec(function(err, messageDoc) {
    //   mongoMessage = messageDoc.message;
    //});
};