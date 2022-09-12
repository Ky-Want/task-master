
import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js";

class TasksService {
  toggleTask(id) {
    let task = appState.tasks.find(task => task.id == id)
    if (!task) {
      throw new Error('Bad ID')
    }
    task.task = !task.task
    appState.emit('tasks')
    saveState('tasks', appState.tasks)
  }




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