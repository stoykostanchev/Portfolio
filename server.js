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
var router = express.Router();
app = express();
router.get('/', function (req, res) {
    res.sendFile('index.html', { 
        root: __dirname + '/client/views'
    });
});
router.get('/server', function (req, res) {
    res.sendFile('index.html', { 
        root: __dirname + '/client/views'
    });
});
router.use('/utils',     express.static(__dirname + '/client/utils'));
//API
var Post = require('./server/models/Post.js');
router.route('/server/API/REST/post')
    .get(function(req, res) {
        Post.find(function(err, posts) {
            if (err) {
                res.send(err);
            } else {
                res.json(posts); 
            }
        });
    });

app.use('/resources', express.static(__dirname + '/client/resources'));
app.use('/templates', express.static(__dirname + '/client/views/templates'));
app.use('/js',        express.static(__dirname + "/client/js"));
app.use('/', router);

app.listen(port, function() {
    console.log('Im listening on port '+port+'.');
});