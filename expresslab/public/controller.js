(function(){
    function formController(){
        var vm = this;
        vm.tasks = ["Vacuum the cat", "Rake banana peels", "Whittle the soap", "Dig tunnel with spoon", "Feed Blowfish", "Rewind video tapes"];
        vm.removeTasks = function(index) {
            console.log(index);
            vm.tasks.splice(index, 1);
        };
        vm.addTasks = function(index) {
            console.log(index);
            vm.tasks.push(index);
            vm.task = "";
            
        }
    };




    angular
    .module("app")
    .controller("formController", formController)
})();