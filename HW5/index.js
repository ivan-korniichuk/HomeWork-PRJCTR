'use strict';

const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter-input');
const form = document.querySelector('.create-task-form');

document.addEventListener('DOMContentLoaded', renderTasks);
clearBtn.addEventListener('click', clearAllTasks);
taskList.addEventListener('click', clearSingleTask);
taskList.addEventListener('click', updateTask);
form.addEventListener('submit', createTask);

function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
}

function setTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createSingleTaskElement(task, id) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.dataset.id = id;
    li.appendChild(document.createTextNode(task));

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteElement);

    const updateElement = document.createElement('span');
    updateElement.className = 'update-item';
    updateElement.innerHTML = '<i class="fa fa-edit"></i>';
    li.appendChild(updateElement);

    taskList.appendChild(li);
}

function renderTasks() {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task) => {
        createSingleTaskElement(task.text, task.id);
    })
}

function createTask(event) {
    event.preventDefault();
    if (taskInput.value.trim() === '') {
        return;
    }

    const id = Date.now();

    createSingleTaskElement(taskInput.value, id);
    storeTaskInLocalStorage({
        text: taskInput.value,
        id: id,
    });
    taskInput.value = '';
}

function storeTaskInLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();

    tasks.push(task);
    setTasksToLocalStorage(tasks);
}

function clearAllTasks() {
    if (confirm("Ви впевнені що хочете видалити всі задачі?")) {
        localStorage.clear();
        taskList.innerHTML = '';
    }
}

function clearSingleTask(event) {
    const iconContainer = event.target.parentElement;
    const listItem = iconContainer.parentElement;

    if (iconContainer.classList.contains("delete-item")) {
        if (confirm("Ви впевнені що хочете видалити цю задачу?")) {
            listItem.remove();
            removeTaskFromLocalStorage(listItem);
        }
    }
}

function updateTask(event) {
    const iconContainer = event.target.parentElement;
    const listItem = iconContainer.parentElement;

    if (iconContainer.classList.contains("update-item")) {
        let newText = prompt("Введіть оновлену задачу");
        console.log(listItem.textContent);
        if(newText){
            updateTaskInLocalStorage(listItem, newText);
            listItem.firstChild.textContent = newText;
        }
    }
}

function updateTaskInLocalStorage(taskToUpdate, newText) {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task, index) => {
        if (parseFloat(taskToUpdate.dataset.id) === task.id) {
            tasks[index].text = newText;
        }
    })

    setTasksToLocalStorage(tasks);
}

function removeTaskFromLocalStorage(taskToRemove) {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task, index) => {
        if (parseFloat(taskToRemove.dataset.id) === task.id) {
            tasks.splice(index, 1)
        }
    })

    setTasksToLocalStorage(tasks);
}