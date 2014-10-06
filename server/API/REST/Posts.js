var Schema   = mongoose.Schema,
    mongoose = require('mongoose'),
    blogPostsSchema;

blogPostsSchema = new Schema({
    title  : String,
    author : String,
    body   : String,
    date   : {
        type    : Date, 
        default : Date.now
    }
});
return mongoose.model('BlogPosts', blogPostsSchema);