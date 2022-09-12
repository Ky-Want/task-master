
import { tasksService } from "../Services/TasksService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class TasksController {
  constructor() { }

  createTask(listId) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newTask = getFormData(form)
      newTask.listId = listId
      tasksService.createTask(newTask)
    } catch (error) {
      console.log(error);
    }
  }


  deleteTask(taskId) {
    try {
      tasksService.deleteTask(taskId)
    } catch (error) {
      console.log(error);
    }
  }
}