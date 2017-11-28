(function(){
    function hoverState(){
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                $element.on("mouseenter", function(){
                    $element.css("background-color","#ff69b4");
                });
                $element.on("mouseleave", function(){
                    $element.css("background-color", "#ff1493");
                });
            }
        };
    }
    angular
    .module("app")
    .directive("hoverState", hoverState);

})();