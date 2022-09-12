import { ListsController } from "./Controllers/ListsController.js";
import { TasksController } from "./Controllers/TasksController.js";



class App {
  //list = bulletin
  listsController = new ListsController


  //task = crime
  tasksController = new TasksController
}

window["app"] = new App();