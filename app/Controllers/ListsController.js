import { appState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _draw() {
  let template = ''
  appState.lists.forEach(l => template += l.Template)
  setHTML('lists', template)
}




export class ListsController {
  constructor() {
    appState.on('lists', _draw)
    appState.on('tasks', _draw)
    _draw()
  }

  createList() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newList = getFormData(form)
      listsService.createList(newList)

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }



  deleteList(listId) {
    // TODO Apply to tasks too
    if (window.confirm("Are you sure you want to delete this list?")) {
      listsService.deleteList(listId)
    }
  }
}
