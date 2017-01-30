import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { UIDProvider } from "../../shared/UID.Provider";


@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css']
})



export class List  {

    public ToDoList = [];
    public NewItem = "";
    public UID;
    public FirebaseUrl;

    constructor(private UIDProvider: UIDProvider) {

        this.UID = this.UIDProvider.UID;
        console.log(this.UID);
        this.FirebaseUrl = "users/" + this.UID;

    }
  


    AddItemToList() {

        if (this.ToDoList.some(x => x === this.NewItem)) {

            alert("your to do list already contains this task")

        } else if (this.NewItem === "") {

            alert("new task can not be nul")

        } else {

            this.ToDoList.push(this.NewItem)

            console.log(this.FirebaseUrl)

            firebase.update(

                this.FirebaseUrl,

                { task: this.ToDoList }

            );

            this.NewItem = "";

        }
    }
    RemoveItemFromList(item) {
        var index = this.ToDoList.indexOf(item)
        this.ToDoList.splice(index, 1);
        firebase.update(
            this.FirebaseUrl,
            { task: this.ToDoList }
        );
    }
}