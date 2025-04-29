const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    // Al hacer click en el texto, tachar/destachar
    span.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    // Botón Editar
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que también tache al editar
      const newTask = prompt('Edit task:', span.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask.trim();
      }
    });

    // Botón Eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que tache al borrar
      li.remove();
    });

    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonsContainer);
    taskList.appendChild(li);

    taskInput.value = '';
  }
});
