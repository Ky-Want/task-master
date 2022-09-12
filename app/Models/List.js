
import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    return /*html*/` 
  <div class="col-12 col-md-4 p-2">
    <div class="elevation-5 rounded">
      <div class="p-2 rounded-top d-flex ${this.color}">
        <div class="d-flex flex-column w-100 justify-content-center">
          <i class="fa-solid fa-circle-xmark fs-4 p-2" onclick="app.listsController.deleteList('${this.id}')"></i>
          <div class="d-flex justify-content-center flex-wrap">
          </div>
          <h1 class="text-outline text-center">${this.name}</h1>
        </div>
      </div>
      <div class="px-3">
        <h3 class="text-center py-2">Tasks...</h3>
        <div id="tasks" class="pb-3">
          ${this.Tasks}
        </div>
        <form onsubmit="app.tasksController.createTask('${this.id}')" class="py-2">
          <div class="form-group d-flex justify-content-between border-bottom border-2">
            <input class="task-input" type="text" name="description" placeholder="Add Task...">
            <button class="btn" type="submit"><i class="mdi mdi-plus"></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `
  }


  get Tasks() {
    let template = ''
    let tasks = appState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }
}