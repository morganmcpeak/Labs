(function(){
    var taskForm = {
        controller: "formController",
        template: `
        <form>
        <div class="formtext">        
             <h1>TODO List</h1>
             <p>A place to store the things you have to do!</p>
             <input type="text" ng-model="filterTask" class="filterTask" placeholder="Filter your to-dos">        
           
             </div> 
           
     <div class="list">
         <ol>
             <li hover-state2 ng-repeat="tasks in $ctrl.tasks | filter: filterTask"> {{ tasks }} <a ng-click="$ctrl.removeTasks($index)" href="">X</a></li>
             </ol>
             <input type="text" ng-model="$ctrl.newTask" class="newTask" placeholder="Add your to-do"> 
             <button hover-state ng-click="$ctrl.addTasks($ctrl.newTask)">Add</button>
             </div>
       </form>     
         `,
        };

    angular
    .module("app")
    .component("taskForm", taskForm);

})();