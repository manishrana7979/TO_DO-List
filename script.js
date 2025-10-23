document.getElementById('todo-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const todoInput = document.getElementById('todo-input');
  const todoValue = todoInput.value.trim();

  if (todoValue) {
    // Create new list item
    const li = document.createElement('li');
    li.textContent = todoValue;

    // Create mark complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = function () {
      li.classList.toggle('complete');
    };

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
      li.remove();
    };

    // Append buttons to list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add the list item to the list
    document.getElementById('todo-list').appendChild(li);

    // Clear the input field
    todoInput.value = '';
  }
});

// Clear all tasks
document.getElementById('clear-all-btn').addEventListener('click', function () {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
});
