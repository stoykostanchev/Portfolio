/*Lipsum [https://github.com/traviskaufman/node-lipsum, http://www.lipsum.com/]
usage example : */
var Lipsum = require('node-lipsum');
var lipsum = new Lipsum();
var lipsumOpts = {
  start: 'no', //start with "Lorem ipsum"
  what: 'words', //paragraphs words bytes lists
  amount: 3
};


module.exports = {
    find : function(params, fields, callback) {
        var posts = [],
            count = params.id ? 1 : 5,
            now   = new Date();
            
        fields = fields ? fields : 'all';
        
        (function getWord() {
            lipsumOpts.amount = 1 + Math.random()*4;
            
            if ( fields === 'all' || fields.indexOf("content") > -1) {
                lipsumOpts.what = 'paragraphs';
            }
            lipsum.getText(function(text) {
                var postD = new Date(),
                    post  = {
                        id      : params.id || count+1,
                        title   : text,
                        date    : postD.setDate(now.getDate() - count),
                        content : text,
                        author  : 'Stoyko Stanchev'
                    }, p;
                
                count--;
               
                if (fields === 'all' || fields.indexOf('content') === -1) {
                    //Avoid sending 2 req to Lipsum, just take first X words for title
                    post['title'] = post['title'].split(/\s+/)
                                                 .slice(0, lipsumOpts.amount)
                                                 .join(" ");
                } else if ( fields !== 'all' ) {
                    for (p in post) {
                        if (fields.indexOf(p) === -1){               
                            delete post[p];
                        }
                    }
                }
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