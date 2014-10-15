angular.module('projectX')
    .factory('NavigationService', function () {
       var navService = {};
    
       navService.getMainNavItems = function () {
          return [
            {
                 name : 'HOME',
                 sref : 'home',
                 text : ' ',
                 css  : 'home icon-home'
    	    },
            {
                 name : 'Blog'
    	    },
    	    {
                 name : 'Projects'
    	    },
            {
                 name : "How To's",
                 sref : 'tutor'
    	    },
    	    {
                 name : 'Contact'
    	    },
            {
                 name : 'About'
    	    }
          ];
       }
       return navService;
    });