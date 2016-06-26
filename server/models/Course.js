var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required'},
    featured: {type: Boolean, required: '{PATH} is required'},
    published: {type: Date, required: '{PATH} is required'},
    tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2014'), tags: ['C#']});
            Course.create({title: 'Javascript for Javascript Developers', featured: false, published: new Date('1/29/2015'), tags: ['JavaScript']});
            Course.create({title: "C# for People who have had enough of Java's nonsense", featured: true, published: new Date('2/25/2015'), tags: ['C#', 'Java']});
            Course.create({title: 'JavaScript for Developers who think Java and JavaScript are related', featured: false, published: new Date('11/19/2014'), tags: ['JavaScript', 'Java']});
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;