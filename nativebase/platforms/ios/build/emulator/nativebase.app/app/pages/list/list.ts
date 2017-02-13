import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { UIDProvider } from "../../shared/UID.Provider";
import { TaskService } from "./task.service";


@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css'],
    providers: [UIDProvider, TaskService]

})



export class List implements OnInit {

    public NewItem = "";
    public UID;
    public FirebaseUrl: string;
    public ToDoList ;

    constructor(private UIDProvider: UIDProvider, private TaskService: TaskService) {}


    ngOnInit() {

        this.ToDoList= ["coucou", "lolo" , "caca"];
        this.UID = this.UIDProvider.UID;
        this.FirebaseUrl = "users/" + this.UID;
        console.log("init url")
        console.log(this.FirebaseUrl)
        //this.TaskService.GetTasks(this.FirebaseUrl)

        console.log("watch out..")
        console.log(this.ToDoList)

    }

    AddItemToList() {
        if (this.ToDoList.some(x => x === this.NewItem)) {
            alert("your to do list already contains this task")
        } else if (this.NewItem === "") {
            alert("new task can not be nul")
        } else {
            this.ToDoList.push(this.NewItem)
            firebase.update(
                this.FirebaseUrl,
                { task: this.ToDoList }
            );
            this.NewItem = "";
        }
    };



    RemoveItemFromList(item) {
        var index = this.ToDoList.indexOf(item)
        this.ToDoList.splice(index, 1);
        firebase.update(
            this.FirebaseUrl,
            { task: this.ToDoList }
        );
    }

}