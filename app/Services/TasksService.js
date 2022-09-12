
import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js";

class TasksService {
  deleteTask(taskId) {
    let tasks = appState.tasks.filter(t => t.id != taskId);
    appState.tasks = tasks
    saveState('tasks', appState.tasks)
  }
  createTask(newTask) {
    let task = new Task(newTask)
    console.log('new task', task);
    appState.tasks = [task, ...appState.tasks]
    console.log(appState.tasks);
    saveState('tasks', appState.tasks)
  }
}

export const tasksService = new TasksService