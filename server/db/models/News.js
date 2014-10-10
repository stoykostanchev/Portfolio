/*Lipsum [https://github.com/traviskaufman/node-lipsum, http://www.lipsum.com/]
usage example : */
var Lipsum = require('node-lipsum');
var lipsum = new Lipsum();
var lipsumOpts = {
  start: 'no', //start with "Lorem ipsum"
  what: 'words', //paragraphs words bytes lists
  amount: 50
};


module.exports = {
    find : function(params, fields, callback) {
        var posts = [],
            count = 4,
            now   = new Date();
  
        fields = fields ? fields : 'all';
        
        (function getWord() {
            lipsum.getText(function(text) {
                var postD = new Date(),
                    post  = {
                        id      : count+1,
                        title   : text.split(/\s+/).slice(0, Math.random()*5).join(" "),
                        type    : postD.setDate(now.getDate() - count),
                        link    : 'sitelink',
                        author  : 'Stoyko Stanchev',
                        description : text,
                    };
                
                count--;
              
                posts.push(post);
                if(count) {
                    getWord();
                } else {
                    callback(null, posts.length > 1 ? posts : posts[0]);
                }
            }, lipsumOpts);
        }) ();
    }
};