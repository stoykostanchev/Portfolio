angular.module('projectX')
    .directive('sitesForSharing', ['$location', 
        function($location) {
            function link(scope, element, attrs) {
                var refresh = addthis.layers.refresh;
                //see http://support.addthis.com/customer/portal/articles/1692927-using-dashboard-configuration-tools-dynamically
                if (refresh) {
                    refresh();
                }
            }
            return {
                restrict: 'E',
                // addthis:url="http://example.com"
                template: function(elem, attr){
                    var tpl = '<div class="addthis_sharing_toolbox sharing" ';
                    
                    if (attr.url === 'base') {
                        tpl += 'data-url="' + $location.host()+'"';
                    }
                    tpl += '></div>';
                    console.log(tpl)
    
                    return tpl;
                },
                link: link
            };
        }
    ]);
