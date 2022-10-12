const todoTemplate = document.querySelector('#todo-template');
const editTodoTemplate = document.querySelector('#edit-todo-template');
const output = document.querySelector('.output');
const addTodoButton = document.querySelector('#todo-form button');
index = 0;

removeTemplates();
addTodoButton.addEventListener('click', addTodo);

function removeTemplates() {
    todoTemplate.remove();
    editTodoTemplate.remove();
}

function addTodo(e) {
    e.preventDefault();
    const todo = todoTemplate.cloneNode(true);
    todo.id = `todo-${index}`;
    index++;
    addTodoTemplateFuntions(todo)
    todo.querySelector('.todo-title').textContent = "New Todo";
    console.log(todo);
    output.appendChild(todo);

}

/**
 * @param {Node} node 
 */
function addTodoTemplateFuntions(node) {

    node.querySelector('.complete').addEventListener('click', completeTodo);

    function completeTodo(e) {
        console.log(e.target.parentNode.parentNode);
        document.querySelector(`#${e.target.parentNode.parentNode.id}`).classList.toggle('completed');
    }
}

