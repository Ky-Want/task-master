import { appState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/Store.js";

class ListsService {
  deleteList(listId) {
    let lists = appState.lists.filter(l => l.id != listId);
    appState.lists = lists
    saveState('lists', appState.lists)

  }

  createList(newList) {
    let list = new List(newList)
    appState.lists = [list, ...appState.lists]
    saveState('lists', appState.lists)
    console.log(appState.lists);
  }



}

export const listsService = new ListsService