var Lipsum = require('node-lipsum'),
    lipsum = new Lipsum(),
    lipsumOpts = {
      start: false, //start with "Lorem ipsum"
      what: 'words', //paragraphs words bytes lists
      amount: 2
    };


module.exports = {
    find : function(params, fields, callback) {
        var projects = [],
            count = params.id ? 1 : 3,
            now   = new Date();
  
        fields = fields ? fields : 'all';
        
        (function getWord() {
            lipsumOpts.amount = 1 + Math.random()*4;
            
            if ( fields === 'all' || fields.indexOf("description") > -1) {
                lipsumOpts.what = 'paragraphs';
            }
            lipsum.getText(function(text) {
                var projectD = new Date(),
                    project  = {
                        id     : params.id || count+1,
                        title  : text,
                        date   : projectD.setDate(now.getDate() - count),
                        author : 'Stoyko Stanchev',
                        description : text,
                        category: ['programming', 'general'][Math.floor(Math.random())]
                    }, p;
                
                count--;
               
                if (fields === 'all' || fields.indexOf('description') === -1) {
                    project['title'] = project['title'].split(/\s+/)
                                                 .slice(0, lipsumOpts.amount)
                                                 .join(" ");
                } else if ( fields !== 'all' ) {
                    for (p in project) {
                        if (projects.indexOf(p) === -1){               
                            delete projects[p];
                        }
                    }
                }
                projects.push(project);
                if(count) {
                    getWord();
                } else {
                    callback(null, projects.length > 1 ? projects : projects[0]);
                }
            }, lipsumOpts);
        }) ();
    }
};