import { Component } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css']
})



export class List {

    public ToDoList = [];
    public NewItem = "";

    AddItemToList() {
        console.log(this.NewItem)
        if (this.ToDoList.some(x => x === this.NewItem)) {
            alert("your to do list already contains this tak")
        } else if (this.NewItem === "") {
            alert("new task can not be nul")
        } else {
            this.ToDoList.push(this.NewItem)
            firebase.setValue(
                '/list',
                { task: this.NewItem }
            );
            this.NewItem = "";
        }
    }

}