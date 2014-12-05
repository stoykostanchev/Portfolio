angular.module('projectX').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/about/about.html',
    "<article class=module-about><h1 class=module-title>About the author</h1><div class=module-about-info><section><img src=http://static.mindcache.it/assets/images/others/sstanchev.jpg class=\"module-about-picture main-brdr\"><section class=content><p>My name is Stoyko Stanchev, I am the author of this site. I am 26 years old, from Bulgaria.</p><p>My passion is writing good, long lasting, easily extendable and maintanable, well formatted code. That being said, I do realise most of the time producing something working as fast as possible brings the most benefit.</p><p>During the last 2 years and a half I was a full stack developer in a fast growing French company. Before that I have been studying at the Faculty of Mathematics and Informatics, at Sofia University, Bulgaria, also doing some freelancing nearing the graduation.</p></section></section><section class=\"container-fluid experience row\"><h2>Experience levels</h2><section class=col-md-3><h3>Professional</h3><ul><li>Javascript (ExtJs)</li><li>PHP</li><li>SQL</li><li>Git</li><li>HTML</li><li>CSS</li></ul></section><section class=col-md-3><h3>Hobby</h3><ul><li>Angular</li><li>Node</li><li>MongoDB</li><li>UML</li></ul></section><section class=col-md-3><h3>Academical</h3><ul><li>C++</li><li>C#</li><li>Haskell</li><li>Java</li></ul></section></section><footer>Got any questions? <a ui-sref=contact>Drop me a line or give me a call.</a></footer></div></article>"
  );


  $templateCache.put('app/blog/blog.html',
    "<div class=module-blog><aside ui-view=list class=blog-list-view></aside><article ui-view=post class=blog-post-view></article></div>"
  );


  $templateCache.put('app/blog/list/list.html',
    "<div class=blog-list><h1>Recent entries :</h1><ul class=blog-list-results><li ng-repeat=\"post in posts\"><a ui-sref-active=active ui-sref=\".post({postUrlId : post.url_id})\"><time>{{post.date | date : 'yyyy-MM-dd'}}</time> {{post.title}}</a></li></ul></div>"
  );


  $templateCache.put('app/blog/post/post.html',
    "<div class=blog-post><header class=blog-post-header><h1 class=title>{{post.title}}</h1><p class=author>{{post.author}}</p><time class=date>{{post.date | date : 'yyyy-MM-dd'}}</time></header><div class=blog-post-body><sites-for-sharing></sites-for-sharing><p class=content ng-bind-html=trustedContent></p></div></div>"
  );


  $templateCache.put('app/contact/contact.html',
    "<section class=module-contact><div class=row><form name=contactForm novalidate class=\"contacts form-horizontal col-md-6\" role=form><h1 class=module-title>Leave a message</h1><div class=form-group><div class=col-sm-10><input class=form-control id=name required placeholder=Name ng-model=message.name></div></div><div class=form-group><div class=col-sm-10><input type=email class=form-control id=email placeholder=Email ng-model=message.email required></div></div><div class=form-group><div class=col-sm-10><textarea class=form-control id=text rows=3 placeholder=Message ng-model=message.text required></textarea></div></div><div class=form-group><div class=col-sm-10><button type=submit ng-disabled=contactForm.$invalid class=\"btn btn-default\" ng-click=send()>Send</button> <span class=sample-show-hide ng-show=saving>Thank you for your comment!</span></div></div></form><section class=\"module-contact-text col-md-6\"><h1 class=module-title>Call the author</h1><p>+ 359 / 883 347 023 - <a href=#/about>Stoyko Stanchev</a></p></section></div></section>"
  );


  $templateCache.put('app/home/home.html',
    "<div class=module-home><section ui-view name=news></section><section class=module-home-content><h1>Welcome!</h1><div class=module-home-content-body><article><h2>What is Mindcache?</h2><p>Mindcache is a blog-like web site. It is a place, where I could share my thoughts and experience with the world.</p></article><article><h2>Why Mindcache?</h2><p>Mind is responsible for memory.</p><p>Caching is a way in programming to speed up data access, most often by moving a copy of it to a place, that has lower access time. Cached data could be erased from the source, but still be available to the instance, using the cache.</p><p>Mindcache is an online site, where one could look for synthesized information, or just browse to see what else is stored in the cache.</p></article><article><h1>Where do I look for stuff?</h1><p>This site currently has the following sections</p><p><dl><dt><dfn><a ui-sref=blog>The Blog</a></dfn><dd>is the place, where random thoughts get occasionally stored.</dd><dd></dd></dt><dt><dfn><a ui-sref=tutor>How To's</a></dfn><dd>Contains particular tutorials on different tasks.</dd></dt><dt><dfn><a ui-sref=projects>Projects</a></dfn><dd>Contains links, descriptions and history for some of the (open source) projects I am / have been involved with.</dd></dt><dt><dfn><a ui-sref=contact>Contact</a></dfn><dd>It's currently the place to go, if you want comment on a topic, ask a question, or just say Hi</dd></dt><dt><dfn><a ui-sref=about>About</a></dfn><dd>Contains details about me.</dd></dt></dl></p></article></div></section></div>"
  );


  $templateCache.put('app/home/news/news.html',
    "<section class=news><h1 class=\"header fnt-l\">Latest site updates:</h1><ul class=\"main-brdr main-bgclr-alt3 fnt-m\"><li class=\"newsItem pdng-l\" ng-repeat=\"newsItem in news\"><article><h2 class=\"title fnt-l\"><a ng-href={{newsItem.link}}><span class=icon-bullhorn></span>{{newsItem.title}}</a></h2><time class=date>{{newsItem.date | date : 'yyyy-MM-dd'}}</time><p class=description ng-bind-html=newsItem.description></p><p class=author>{{newsItem.author}}</p></article></li></ul></section>"
  );


  $templateCache.put('app/projects/list/list.html',
    "<div ng-repeat=\"project in projects\" class=\"project-list-entry row\" ng-if=$even><div class=col-md-6><article class=project-body><h1><a class=title ui-sref=\"projects.project({projectId : project.url_id})\">{{project.title}}</a></h1><p class=description>{{project.short_descr}}</p><a class=more ui-sref=\"projects.project({projectId : project.url_id})\">Read more</a></article></div><div class=col-md-6 ng-class=odd ng-if=\"!$last && $even && projects[$index + 1]\"><article class=project-body><h1><a class=title ui-sref=\"projects.project({projectId : projects[$index + 1].url_id})\">{{projects[$index + 1].title}}</a></h1><p class=description>{{projects[$index + 1].short_descr }}</p><a class=more ui-sref=\"projects.project({projectId : projects[$index + 1].url_id})\">Read more <span></span></a></article></div></div>"
  );


  $templateCache.put('app/projects/project/project.html',
    "<article class=module-project-display><header><h1 class=title>{{project.title}}</h1><a class=repo ng-href={{project.git_link}} target=_blank><span class=icon-github></span>code</a><div class=author>{{project.author}}</div></header><div class=module-projects-display-body><sites-for-sharing></sites-for-sharing><p class=description ng-bind-html=project.description></p><a href back-button class=link>Back to projects</a></div></article>"
  );


  $templateCache.put('app/tutorials/tutorial/tutorial.html',
    "<section class=tutorial-display><nav class=navigation><a href back-button>Tutorials</a> / {{tutorial.category}}</nav><article class=tutorial><header><h1 class=title>{{tutorial.title}}</h1><p class=author>{{tutorial.author}}</p><time class=date>{{tutorial.date | date : 'yyyy-MM-dd'}}</time></header><div class=tutorial-body><sites-for-sharing></sites-for-sharing><p class=description ng-bind-html=tutorial.description></p></div></article></section>"
  );


  $templateCache.put('app/tutorials/tutorials.html',
    "<!-- Controls - filters, sorters etc. --><form class=\"controls form-inline\" role=form><div class=\"form-group filters\"><label for=category>Category</label><select class=form-control id=category ng-model=search.category><option value=\"\">- Any -</option><option ng-repeat=\"cat in categories\" value={{cat.name}}>{{cat.name}}</option></select></div><div class=\"form-group sorters\"><label for=sorter>Sort by</label><select class=form-control id=sorter ng-model=order><option value=date>Date</option><option ng-repeat=\"(key, val) in categories[0]\">{{key}}</option></select><div class=glyphicon ng-click=\"reverse=!reverse\" ng-class=\"{true : 'glyphicon-sort-by-alphabet' , false : 'glyphicon-sort-by-alphabet-alt'}[reverse]\"></div></div><input class=search placeholder=\" - Search -\" name=word ng-model=\"search.description\"></form><!-- Tutorials found display --><section class=tutor-results><article class=tutor-entry-body ng-repeat=\"tutorial in tutorials | orderBy: order : reverse | filter : search\"><header><h1 class=title>{{tutorial.title}}</h1><time class=date>{{tutorial.date | date : 'yyyy-MM-dd'}}</time><p class=author>{{tutorial.author}}</p></header><p class=description ng-bind-html=tutorial.short_description></p><a class=more ui-sref=\"tutor.display({ urlId : tutorial.url_id})\">Read more</a></article></section>"
  );


  $templateCache.put('components/footer/footer.html',
    "<footer class=footer>This work by <span xmlns:cc=http://creativecommons.org/ns# property=cc:attributionName>Stoyko Stanchev</span> is licensed under a <a rel=license href=\"http://creativecommons.org/licenses/by/4.0/\">Creative Commons Attribution 4.0 International License</a>. <a rel=license href=\"http://creativecommons.org/licenses/by/4.0/\"><img alt=\"Creative Commons License\" style=border-width:0 src=\"https://i.creativecommons.org/l/by/4.0/88x31.png\"></a><sites-for-sharing url=base></sites-for-sharing></footer>"
  );


  $templateCache.put('components/navigation/navigation.html',
    "<nav ng-controller=NavigatorController class=navigator><a ui-sref-active=active class=\"nav-{{cat.css ||cat.sref || cat.name.toLowerCase()}}\" ui-sref=\"{{cat.sref || cat.name.toLowerCase()}}\" role=button ng-repeat=\"cat in categories\">{{cat.text || cat.name}}</a></nav>"
  );

}]);
