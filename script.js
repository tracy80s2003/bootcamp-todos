var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos () {
    // clear existing todos
    todoList.innerHTML = ''
    // re-render list of todos
    for (var i = 0; i < todos.length; i++) {
        // create li element
        var li = document.createElement('li')
        // add todo text to li
        li.innerText = todos[i]
        // append li to todoList
        todoList.appendChild(li)
    }
}

function addTodo(event) {
    event.preventDefault()
    // get todoInput value
    var newTodo = todoInput.value
    console.log(newTodo)

    if (newTodo !== '') {
        // push value into todos
        todos.push(newTodo)
        todoInput.value = null
        renderTodos()
    }
}

todoForm.addEventListener('submit', addTodo)

renderTodos ()