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
    find : function(callback) {
        var posts = [],
            count = 5,
            now   = new Date();
        
        (function getWord() {
            lipsumOpts.amount = 1 + Math.random()*4;
            lipsum.getText(function(text) {
                var postD = new Date();
                
                count--;
                posts.push({
                    title : text,
                    date  : postD.setDate(now.getDate() - count)
                });
                if(count) {
                    getWord();
                } else {
                    callback(null, posts);
                }
            }, lipsumOpts);
        }) ();
    }
};