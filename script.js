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
        // add data-index attribute
        li.setAttribute('data-index', i)
        // create button
        var button = document.createElement('button')
        button.innerText = "Complete"
        li.appendChild(button)
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

function removeTodo(event) {
    var target = event.target
    if (target.matches('button')) {
    // find index from LI
    var index = parseInt(target.parentNode.getAttribute('data-index'))
    // remove the todo from the todos array
    todos.splice(index, 1)
    // re-render todos
    renderTodos()
    }
}

todoForm.addEventListener('submit', addTodo)
todoList.addEventListener('click', removeTodo)

renderTodos ()