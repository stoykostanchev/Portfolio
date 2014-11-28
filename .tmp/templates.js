angular.module('projectX').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/about/about.html',
    "<div class=\"module main-brdr module-about main-bgclr-alt\"><h1 class=module-title>About the author</h1><div class=\"module-about-info main-brdr main-bgclr-alt2 fnt-m pdng-xl module-body\"><div style=\"overflow: auto\"><img src=http://static.mindcache.it/assets/images/others/sstanchev.jpg class=\"module-about-picture main-brdr\"><div class=content><p>My name is Stoyko Stanchev, I am the author of this site. I am 26 years old, from Bulgaria.</p><p>My passion is writing good, long lasting, easily extendable and maintanable, well formatted code. That being said, I do realise most of the time producing something working as fast as possible brings the most benefit.</p><p>During the last 2 years and a half I was a full stack developer in a fast growing French company. Before that I have been studying at the Faculty of Mathematics and Informatics, at Sofia University, Bulgaria, also doing some freelancing nearing the graduation.</p></div></div><div class=\"container-fluid experience\"><div class=row><h2>Experience levels</h2><div class=col-md-3><h3>Professional</h3><ul><li>Javascript (ExtJs)</li><li>PHP</li><li>SQL</li><li>Git</li><li>HTML</li><li>CSS</li></ul></div><div class=col-md-3><h3>Hobby</h3><ul><li>Angular</li><li>Node</li><li>MongoDB</li><li>UML</li></ul></div><div class=col-md-3><h3>Academical</h3><ul><li>C++</li><li>C#</li><li>Haskell</li><li>Java</li></ul></div></div></div><p>Got any questions? <a ui-sref=contact>Drop me a line or give me a call.</a></p></div></div>"
  );


  $templateCache.put('app/blog/blog.html',
    "<div class=\"module main-brdr module-blog main-bgclr-alt\"><div ui-view=list class=blog-list-view></div><div ui-view=post class=blog-post-view></div></div>"
  );


  $templateCache.put('app/blog/list/list.html',
    "<div class=blog-list><p class=fnt-l>Recent entries :</p><div class=\"blog-list-results main-brdr main-bgclr-alt3 pdng-m\"><a ng-repeat=\"post in posts\" ui-sref-active=active ui-sref=\".post({postUrlId : post.url_id})\"><span>{{post.date | date : 'yyyy-MM-dd'}}</span> <span>{{post.title}}</span></a></div></div>"
  );


  $templateCache.put('app/blog/post/post.html',
    "<div class=blog-post><div class=blog-post-header><div class=\"title fnt-xxl\">{{post.title}}</div><p class=author>{{post.author}}</p><p class=date>{{post.date | date : 'yyyy-MM-dd'}}</p></div><div class=\"module-body blog-post-body main-brdr main-bgclr-alt2 pdng-xl fnt-m\"><sites-for-sharing></sites-for-sharing><p class=content ng-bind-html=trustedContent></p></div></div>"
  );


  $templateCache.put('app/contact/contact.html',
    "<div class=\"module main-brdr module-contact main-bgclr-alt\"><div class=row><form name=contactForm novalidate class=\"contacts form-horizontal col-md-6\" role=form><h1 class=module-title>Leave a message</h1><div class=form-group><!--<label for=\"name\" class=\"col-sm-2 control-label\">Name</label>--><div class=col-sm-10><input class=form-control id=name required placeholder=Name ng-model=message.name></div></div><div class=form-group><!--<label for=\"email\" class=\"col-sm-2 control-label\">Email</label>--><div class=col-sm-10><input type=email class=form-control id=email placeholder=Email ng-model=message.email required></div></div><!--<div class=\"form-group\">--><!--<label for=\"topic\" class=\"col-sm-2 control-label\">Topic</label>--><!--    <div class=\"col-sm-10\">--><!--      <select class=\"form-control\" id=\"topic\" ng-model=\"message.topic\">--><!--          <option value=\"none\">- other -</option>--><!--          <option value=\"business\">Business</option>--><!--          <option value=\"feedback\">Feedback & Comments</option>--><!--          <option value=\"question\">Questions</option>--><!--      </select>--><!--    </div>--><!--</div>--><div class=form-group><!--<label for=\"text\" class=\"col-sm-2 control-label\">Message</label>--><div class=col-sm-10><textarea class=form-control id=text rows=3 placeholder=Message ng-model=message.text required></textarea></div></div><div class=form-group><div class=col-sm-10><button type=submit ng-disabled=contactForm.$invalid class=\"btn btn-default\" ng-click=send()>Send</button> <span style=\"float : right\" class=\"check-element sample-show-hide\" ng-show=saving>Thank you for your comment!</span></div></div></form><div class=\"module-contact-text col-md-6\"><h1 class=module-title>Call the author</h1><p class=fnt-m>+ 359 / 883 347 023 - <a href=#/about class=fnt-m>Stoyko Stanchev</a></p><!--        <h1>Categories</h1>--><!--        <h2>Business</h2>--><!--        <p>--><!--            Interested in hiring me, or helping me on any of my projects? <br />--><!--            Go for it! --><!--        </p>--><!--        <h2>Feedback & Comments</h2>--><!--        <p>--><!--            Have something to say about a post / tutorial / design? <br />--><!--            Do you want to give your thumbs up or down on something? <br />--><!--            Any feedback is wellcomed, as long as it's constructive--><!--        </p>--><!--        <h2>Questions</h2>--><!--        <p>--><!--            Wondering about something I've written about? <br />--><!--            I might be able to help. --><!--        </p>--><!--    </div>--></div></div></div>"
  );


  $templateCache.put('app/home/home.html',
    "<div class=\"module main-brdr module-home main-bgclr-alt\"><ui-view name=news></ui-view><div class=module-home-content><div style=\"font-weight : bold\" class=fnt-xxl>Welcome!</div><div class=\"module-body module-home-content-body main-bgclr-alt2 pdng-l main-brdr\"><h1>What is Mindcache?</h1><p>Mindcache is a blog-like web site. It is a place, where I could share my thoughts and experience with the world.</p><h1>Why Mindcache?</h1><p>Mind is responsible for memory.</p><p>Caching is a way in programming to speed up data access, most often by moving a copy of it to a place, that has lower access time. Cached data could be erased from the source, but still be available to the instance, using the cache.</p><p>Mindcache is an online site, where one could look for synthesized information, or just browse to see what else is stored in the cache.</p><h1>Where do I look for stuff?</h1><p>This site currently has the following sections<ul><li><a ui-sref=blog>The Blog</a> is the place, where random thoughts get occasionally stored.</li><li><a ui-sref=tutor>How To's</a> contains particular tutorials on different tasks.</li><li><a ui-sref=projects>Projects</a>contains links, descriptions and history for some of the (open source) projects I am / have been involved with.</li><li><a ui-sref=contact>Contact</a> is currently the place to go, if you want comment on a topic, ask a question, or just say Hi</li><li><a ui-sref=about>About</a> contains details about me.</li></ul></p><p></p><p>Have fun and enjoy your stay!</p></div></div></div>"
  );


  $templateCache.put('app/home/news/news.html',
    "<div class=news><div class=\"header fnt-l\">Latest site updates:</div><div class=\"main-brdr main-bgclr-alt3 fnt-m\"><div class=\"newsItem pdng-l\" ng-repeat=\"newsItem in news\"><div class=\"title fnt-l\"><a ng-href={{newsItem.link}}><span class=icon-bullhorn></span>{{newsItem.title}}</a></div><div class=date>{{newsItem.date | date : 'yyyy-MM-dd'}}</div><div class=description ng-bind-html=newsItem.description></div><div class=author>{{newsItem.author}}</div></div></div></div>"
  );


  $templateCache.put('app/projects/list/list.html',
    "<div ng-repeat=\"project in projects\" class=row ng-if=$even><div class=\"col-md-6 pdng-l\"><div class=\"project module-body main-brdr pdng-l main-bgclr-alt2\"><a class=\"title fnt-xl\" ui-sref=\"projects.project({projectId : project.url_id})\">{{project.title}}</a> <span class=description>{{project.short_descr}}</span> <a class=more ui-sref=\"projects.project({projectId : project.url_id})\">Read more <span></span></a></div></div><div class=\"col-md-6 pdng-l\" ng-class=odd ng-if=\"!$last && $even && projects[$index + 1]\"><div class=\"project main-brdr module-body pdng-l main-bgclr-alt2\"><a class=\"title fnt-xl\" ui-sref=\"projects.project({projectId : projects[$index + 1].url_id})\">{{projects[$index + 1].title}}</a> <span class=description>{{projects[$index + 1].short_descr }}</span> <a class=more ui-sref=\"projects.project({projectId : projects[$index + 1].url_id})\">Read more <span></span></a></div></div></div>"
  );


  $templateCache.put('app/projects/project/project.html',
    "<div class=\"project-display main-brdr\"><div class=\"title fnt-xxl\">{{project.title}}</div><a class=\"repo icon-github fnt-l\" ng-href={{project.git_link}} target=_blank><span>code</span></a><div class=author>{{project.author}}</div><!--<div class=\"date\">{{project.date | date : 'yyyy-MM-dd'}}</div>--><div class=\"module-body pdng-xl main-bgclr-alt2\"><sites-for-sharing></sites-for-sharing><div class=\"description fnt-m\" ng-bind-html=project.description></div><div class=link><a href back-button>Back to projects</a></div></div></div>"
  );


  $templateCache.put('app/tutorials/tutorial/tutorial.html',
    "<div class=tutorial-display><div class=\"navigation fnt-l\"><a href back-button>Tutorials</a> / {{tutorial.category}}</div><div class=tutorial><div class=\"title fnt-xxl\">{{tutorial.title}}</div><div class=author>{{tutorial.author}}</div><div class=date>{{tutorial.date | date : 'yyyy-MM-dd'}}</div><div class=\"tutorial-content pdng-l module-body main-bgclr-alt2\"><sites-for-sharing></sites-for-sharing><div class=\"description fnt-m\" ng-bind-html=tutorial.description></div></div></div></div>"
  );


  $templateCache.put('app/tutorials/tutorials.html',
    "<div><!-- Controls - filters, sorters etc. --><form class=\"controls form-inline\" role=form><div class=\"form-group filters\"><label for=category>Category</label><select class=form-control id=category ng-model=search.category><option value=\"\">- Any -</option><option ng-repeat=\"cat in categories\" value={{cat.name}}>{{cat.name}}</option></select></div><div class=\"form-group sorters\"><label for=sorter>Sort by</label><select class=form-control id=sorter ng-model=order><option value=date>Date</option><option ng-repeat=\"(key, val) in categories[0]\">{{key}}</option></select><div class=glyphicon ng-click=\"reverse=!reverse\" ng-class=\"{true : 'glyphicon-sort-by-alphabet' , false : 'glyphicon-sort-by-alphabet-alt'}[reverse]\"></div></div><input class=search placeholder=\" - Search -\" name=word ng-model=\"search.description\"></form><!-- Tutorials found display --><div class=tutor-results><div class=\"tutor-entry module-body main-bgclr-alt2\" ng-repeat=\"tutorial in tutorials | orderBy: order : reverse | filter : search\"><div class=title>{{tutorial.title}}</div><div class=date>{{tutorial.date | date : 'yyyy-MM-dd'}}</div><div class=author>{{tutorial.author}}</div><div class=description ng-bind-html=tutorial.short_description></div><a class=more ui-sref=\"tutor.display({ urlId : tutorial.url_id})\">Read more</a></div></div></div>"
  );


  $templateCache.put('components/footer/footer.html',
    "<div class=footer>This work by <span xmlns:cc=http://creativecommons.org/ns# property=cc:attributionName>Stoyko Stanchev</span> is licensed under a <a rel=license href=\"http://creativecommons.org/licenses/by/4.0/\">Creative Commons Attribution 4.0 International License</a>. <a rel=license href=\"http://creativecommons.org/licenses/by/4.0/\"><img alt=\"Creative Commons License\" style=border-width:0 src=\"https://i.creativecommons.org/l/by/4.0/88x31.png\"></a><sites-for-sharing url=base></sites-for-sharing></div>"
  );


  $templateCache.put('components/navigation/navigation.html',
    "<div ng-controller=NavigatorController class=navigator><div ui-sref-active=active class=\"nav-item nav-{{cat.css ||cat.sref || cat.name.toLowerCase()}}\" ui-sref=\"{{cat.sref || cat.name.toLowerCase()}}\" role=button ng-repeat=\"cat in categories\">{{cat.text || cat.name}}</div></div>"
  );

}]);
