angular.module('todoApp', [])
  .controller('TodoController', TodoController);

function TodoController() {
    var vm = this;
    vm.addNew = addNewTodo;
    vm.deleteTodo = deleteTodo;
    vm.deleteAll = deleteAll;
    vm.deleteSelected = deleteSelected;
    vm.handleEvent = handleEvent;
    vm.checkAll = checkAll;
    vm.selectTodo = selectTodo;

    vm.listTodos = [
        {text:'test default', isSelected: false},
        {text:'test isCompleted', isSelected: false}
    ];
    vm.canDelete = false;

    function handleEvent(event) {
        if ( event && event.keyCode === 13) {
            addNewTodo();
        }
    }

    function addNewTodo() {
        vm.listTodos.push({text:vm.todoText, isSelected:false});
        vm.todoText = '';
    };

    function deleteTodo(index) {
        vm.listTodos.splice(index, 1);
    }

    function selectTodo(index) {
        vm.listTodos[index].isSelected = !vm.listTodos[index].isSelected;
        vm.canDelete = vm.listTodos[index].isSelected ? true: false;
    }

    function deleteSelected() {
        vm.listTodos = vm.listTodos.filter(function(todo) {
            return todo.isSelected === false;
        });
        vm.canDelete = false;
    }

    function deleteAll() {
        vm.listTodos = [];
        vm.allChecked = false;
        vm.canDelete = false;
    }

    function checkAll() {
        angular.forEach(vm.listTodos, function(todo) {
            todo.isSelected = !todo.isSelected;
        });
    }

}