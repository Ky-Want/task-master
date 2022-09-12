import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.listId = data.listId
    this.color = data.color
    this.task = data.task
  }


  get Template() {
    return `      <div class="d-flex justify-content-between align-items-baseline task-border">
            <p class="px-2 mb-1">
            <input onchange="app.tasksController.toggleTask('${this.id}')" class="ms-2" type="checkbox" ${this.task ? 'checked' : ''}>
            ${this.description}
            </p>
            <i onclick="app.tasksController.deleteTask('${this.id}')" class="mdi mdi-close selectable"></i>
            </div>`
  }
}