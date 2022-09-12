
import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.listId = data.listId
    this.color = data.color
  }


  get Template() {
    return `      <div class="d-flex justify-content-between align-items-baseline task-border">
            <p class="px-2 mb-1">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
            ${this.description}
            </p>
            <i onclick="app.tasksController.deleteTask('${this.id}')" class="mdi mdi-close selectable"></i>
          </div>`
  }

}