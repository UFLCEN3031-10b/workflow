// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [{
    "priority": "now",
    "text": "Learn Angular",
  }, {
    "priority": "now",
    "text": "Learn node"
  }];
  $scope.newItem = {
    "priority": "",
    "text": ""
  };
  
  $scope.addItem = function(event){
    var itemCopy = {};
    console.log("in add");
    console.log($scope.newItem);
    if ($scope.newItem.text !== "" && $scope.newItem.priority !== ""){
      itemCopy.priority = $scope.newItem.priority;    
      itemCopy.text = $scope.newItem.text;
      $scope.todos.push(itemCopy);
      $scope.newItem.text = "";
      $scope.newItem.priority = "";
    }
    else {
      alert("Please enter a task/priority level!")
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
  
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * 
 *      html - new button with input that the JS can read from
 *      edit function (in JS) happens when an edit button is clicked
 *      selects the object from the array, updates its values, and replaces it in the array
 *      
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/