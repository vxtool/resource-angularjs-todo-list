(function() {
  'use strict';

  angular
  .module('todoList')
  .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope'];

  function IndexController($scope) {
    var vm = this;
    vm.todo;

    $scope.allTodos = [];

    $scope.getTotalTodos = function () {
      return $scope.allTodos.length;
    };

    $scope.addTodo = function () {
      $scope.allTodos.push({text:$scope.formTodoText, done:false});
      $scope.formTodoText = '';
    };

    $scope.toggleTodo = function () {
      return this.todo.done = !this.todo.done;
    };

    $scope.clearCompleted = function () {
      var done;
      done = function (el) {
        if (!el.done) { return el; }
      };
      return $scope.allTodos = $scope.allTodos.filter(done);
    };
  }
})();
