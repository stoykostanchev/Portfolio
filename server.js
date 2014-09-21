var express  = require('express'), 
    mongoose = require('mongoose'),
    dbAuth   = require('./dbcreditentials'),
    Schema   = mongoose.Schema,
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

app.listen(3000, function() {
    console.log('Im listening!');
});
