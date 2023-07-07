'use strict';

const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter-input');
const form = document.querySelector('.create-task-form');

document.addEventListener('DOMContentLoaded', renderTasks);
clearBtn.addEventListener('click', clearAllTasks);
taskList.addEventListener('click', clearSingleTask);
form.addEventListener('submit', createTask);

function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
}

function setTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createSingleTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteElement);

    taskList.appendChild(li);
}

function renderTasks() {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
}

function createTask(event) {
    event.preventDefault();
    if (taskInput.value.trim() === '') {
        return;
    }

    createSingleTaskElement(taskInput.value);
    storeTaskInLocalStorage({
        text: taskInput.value,
        id: 
    });
    taskInput.value = '';
}

function storeTaskInLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();

    tasks.push(task);
    setTasksToLocalStorage(tasks);
}

function clearAllTasks() {
    if (confirm('Ви впевнені що хочете видалити всі задачі?')) {
        localStorage.clear();
        taskList.innerHTML = '';
    }
}

function clearSingleTask(event) {
    const iconContainer = event.target.parentElement;
    const listItem = iconContainer.parentElement;

    if (iconContainer.classList.contains('delete-item')) {
        if (confirm('Ви впевнені що хочете видалити цю задачу?')) {
            listItem.remove();
            removeTaskFromLocalStorage(listItem);
        }
    }
}

function removeTaskFromLocalStorage(taskToRemove) {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task, index) => {
        if (taskToRemove.textContent === task) {
            tasks.splice(index, 1)
        }
    })

    setTasksToLocalStorage(tasks);
}

//Попередній код

// function removeTaskFromLocalStorage(taskToRemove) {
//     const tasks = getTasksFromLocalStorage();

//     tasks.forEach((task, index) => {
//         if (taskToRemove.textContent === task) {
//             tasks.splice(index, 1)
//         }
//     })

//     setTasksToLocalStorage(tasks);
// }

//Код #2

// function updateTasksInLocalStorage() {
//     let tasks = [];
    
//     [...taskList.children].forEach((task) => {
//         tasks.push(task.textContent)
//     })
//     setTasksToLocalStorage(tasks);
// }