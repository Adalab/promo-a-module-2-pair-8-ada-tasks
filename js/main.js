const taskList = document.querySelector(".js-task-list");

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
];

for( const tasksItem of tasks) {
    taskList.innerHTML += 
    `<li class="js-task-item">
      <input type="checkbox" class="js-item-checkbox" value="checkbox" />${tasksItem.name}
    </li>`;

    const itemCheckbox = document.querySelectorAll('.js-item-checkbox');
debugger
    itemCheckbox.addEventListener('click', (event) => {
      if (tasksItem.completed) {
        const taskLiItem = document.querySelector(".js-task-item");
        taskLiItem.classList.add("tachado");
      }
  });
}





