(function (){
    var taskList = {
        bindings: {
            toDo: "<",
            toDoFilter: "<"
        },
        controller: "FormController",
        template: 
        `
        <div class="list">
        <ol>
            <li hover-state2 ng-repeat="tasks in $ctrl.tasks | filter: filterTask"> {{ tasks }} <a ng-click="$ctrl.removeTasks($index)" href="">X</a></li>
            </ol>
            <input type="text" ng-model="$ctrl.newTask" class="newTask" placeholder="Add your to-do"> 
            <button hover-state ng-click="$ctrl.addTasks($ctrl.newTask)">Add</button>
            </div>
        `,
    };

    angular
    .module("app")
    .component("taskList", taskList);
})();