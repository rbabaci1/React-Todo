export const getLocalData = key => JSON.parse(localStorage.getItem(key));

export const setLocalStorage = (key, newTask) => {
  const todoList = getLocalData(key);
  const newItem = { id: Date.now(), task: newTask, completed: false };

  if (!todoList) {
    localStorage.setItem(key, JSON.stringify([]));

    return [];
  } else if (todoList && !newTask) return todoList;
  else {
    todoList.push(newItem);
    localStorage.setItem(key, JSON.stringify(todoList));

    return todoList;
  }
};

export const getClearedStorage = key => {
  const todoList = getLocalData(key);
  const notCompletedList = todoList.filter(todo => !todo.completed);

  localStorage.setItem(key, JSON.stringify(notCompletedList));

  return notCompletedList;
};

export const setToggleTodo = (key, id) => {
  const todoList = getLocalData(key);

  todoList.forEach(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
  });

  localStorage.setItem(key, JSON.stringify(todoList));
  return todoList;
};
