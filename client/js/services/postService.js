angular.module('projectX')
    .factory('PostsService', function () {
       var postService = {};
    
       postService.query = function () {
          return [
            {
                 name : 'Posts'
    	    },
    	    {
                 name : 'Projects'
    	    },
    	    {
                 name : 'Contact'
    	    },
            {
                 name : 'About'
    	    }
          ];
       }
       return postService;
    });