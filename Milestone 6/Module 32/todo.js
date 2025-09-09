const loadTODO = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     displayTODO(data);
    //   })
    const res = await fetch(url);
    const data = await res.json();
    displayTODO(data);
}

const displayTODO = (todos) =>{
    console.log(todos);
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';
    // console.log(postContainer);  
    todos.forEach(todo => {
        // console.log(todo.title);
        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
        <div class="todo-card">
            <h1>${todo.title}</h1>
            <p>Completed: ${todo.completed === true ? "complete <i class='fa-solid fa-square-check'></i>" : "incomplete <i class='fa-regular fa-square-check'></i>"}  </p>
        </div>
        `;
        todoContainer.appendChild(todoCard);
    });
}

loadTODO();