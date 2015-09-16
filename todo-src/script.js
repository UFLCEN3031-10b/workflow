// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

  $scope.todos = [{
    "priority": "now",
    text: 'Learn Angular',
    done:false
  }, {
    "priority": "now",
    text: 'Learn node',
    done:false
  }];
  $scope.newItem = {
    "priority": "",
    text: '',
    done:false
  };

  $scope.newItem.text = "";
  $scope.newItem.priority = "";
  $scope.editBox = "";
  $scope.editPriority = "";
  
  $scope.addItem = function(event){
    var itemCopy = {};
    console.log("in add");
    console.log($scope.newItem);
    if ($scope.newItem.text !== '' && $scope.newItem.priority !== ""){
      itemCopy.priority = $scope.newItem.priority;    
      itemCopy.text = $scope.newItem.text;
      $scope.todos.push(itemCopy);
      $scope.newItem.text = "";
      $scope.newItem.priority = "";
    }
    else {
      alert("Please enter a task/priority level!");
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
    
  $scope.showEdits = function(item){
    var index = $scope.todos.indexOf(item);
    $scope.edits = true;
    $scope.editItem = function(keyEvent){
      if(keyEvent.which === 13){
        if($scope.editBox !== "" && $scope.editPriority !== ""){
          $scope.todos[index].text = $scope.editBox;
          $scope.todos[index].priority = $scope.editPriority;
        }
        else{
          alert("Please enter a task/priority level!");
        }
        $scope.edits = false;
      }
    }
  }

	/* Clear all feature */
	$scope.clearItems = function (){
          console.log("Deleted everything");
	  for(var i = 0, len = $scope.todos.length; i < len; i++){
        if($scope.todos[i].done === true){
          $scope.todos.splice(i, 1);
          console.log($scope.todos[i].done);
          i = i-1;
        }
    }
   }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 *
 * *********************//**
 * Created by Michelle on 9/14/2015.
 */
