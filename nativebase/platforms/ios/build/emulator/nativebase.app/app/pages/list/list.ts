import { Component } from "@angular/core";


@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css']
})



export class List {
    public ToDoList = [];

    AddToList(task){
        this.ToDoList.push(task)
    }


}