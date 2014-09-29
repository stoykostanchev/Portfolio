var express  = require('express'), 
    mongoose = require('mongoose'),
    dbAuth   = require('./dbcreditentials'),
    Schema   = mongoose.Schema,
    port     = process.env.PORT || 3000,
    db, app;
//Db
db = mongoose.connect(dbAuth.url).connection;

var blogPostsSchema = new Schema({
    title  : String,
    author : String,
    body   : String,
    date   : {
        type    : Date, 
        default : Date.now
    }
});
var BlogPost = mongoose.model('BlogPosts', blogPostsSchema);
var post     = new BlogPost({
    title  : 'Project X!',
    author : 'Stoyko Stanchev',
    body   : 'This is the truth'  
}); 

db.once('open', function callback() {   
    console.log('Oppeen Seasame'); 
    //post.save(function postSaveCallback (err) {
      //  console.log(err || 'Post created', post);
    //});	
});
//Router
app = express();
app.get('/', function (req, res) {
    res.sendFile('index.html', { 
        root: __dirname + '/client/views'
    });
});
app.use('/utils',     express.static(__dirname + '/client/utils'));
app.use('/resources', express.static(__dirname + '/client/resources'));
app.use('/templates', express.static(__dirname + '/client/views/templates'));
app.use('/js',        express.static(__dirname + "/client/js"));


app.listen(port, function() {
    console.log('Im listening on port '+port+'.');
});
/*Lipsum [https://github.com/traviskaufman/node-lipsum, http://www.lipsum.com/]
usage example : */
var Lipsum = require('node-lipsum');
var fs = require('fs');
var lipsum = new Lipsum();
var lipsumOpts = {
  start: 'yes', //start with "Lorem ipsum"
  what: 'bytes', //paragraphs words bytes lists
  amount: 80
};
lipsum.getText(function(text) {
    console.log('LIPSUM SERVICE EXAMPLE: ', text);    
}, lipsumOpts);