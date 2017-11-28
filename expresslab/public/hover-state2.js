(function(){
    function hoverState2(){
        return {
            restrict: "A",
            link: function($scope, $element, $attr) {
                $element.on("mouseenter", function (){
                    $element.css("color", "purple");
                });
                $element.on("mouseleave", function(){
                    $element.css("color", "black");
                });
            }
        };
    }
angular
    .module("app")
    .directive("hoverState2", hoverState2);
})();