const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const date = document.getElementById("date");


date.innerHTML = new Date().toDateString();
document.addEventListener("DOMContentLoaded", getTodos);



todoBtn.addEventListener('click', (event)=>{
    // Prevent form from submitting
    event.preventDefault();
    
    let todoInputValue = todoInput.value;

    if(!todoInputValue){
        alert("Please fill out the task");
        return;
    }

    // 1 way
    let taskItem =  `<div class="todo">
                        <li class="todo-item">${todoInputValue}</li>
                        <button class="complete-btn"><i class="fas fa-check"></i></button>
                        <button class="trash-btn"><i class="fas fa-trash"></i></button>
                    </div>`;


    saveLocalTodos(todoInput.value);

    todoList.insertAdjacentHTML('beforeend', taskItem);
    todoInput.value = "";


    // 2 way
    // const todoDiv = document.createElement('div');
    // todoDiv.classList.add('todo');

    // const newTodo = document.createElement('li');
    // newTodo.innerText = todoInputValue;
    // newTodo.classList.add('todo-item');
    
    // todoDiv.appendChild(newTodo);

    // const completedBtn = document.createElement('button');
    // completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    // completedBtn.classList.add('complete-btn');
    // todoDiv.appendChild(completedBtn);

    // const trashBtn = document.createElement('button');
    // trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    // trashBtn.classList.add('trash-btn');
    // todoDiv.appendChild(trashBtn);

    // todoList.appendChild(todoDiv);
    // todoInput.value = "";

    
    
});


todoList.addEventListener('click', (event)=>{
    const item = event.target;

    // Delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;

        // Animation
        todo.classList.add('fall');
        removaLocalTodos(todo);
        todo.addEventListener('transitionend', ()=>{
            todo.remove();

        });
        
    }

    // Check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
});





function saveLocalTodos(todo){
    // CHECK - Hey, Do I already thing in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos(){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo)=>{
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // Create Li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');

        todoDiv.appendChild(newTodo);



        // Completed Button
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML =  '<i class="fas fa-check"></i>';
        completedBtn.classList.add('complete-btn');
        todoDiv.appendChild(completedBtn);

        // Trash Button
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML =  '<i class="fas fa-trash"></i>';
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);

        // Append to list
        todoList.appendChild(todoDiv);
    });
}


function removaLocalTodos(todo){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));

}
