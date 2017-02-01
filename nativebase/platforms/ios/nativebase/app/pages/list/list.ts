import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { UIDProvider } from "../../shared/UID.Provider";


@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css']
})



export class List implements OnInit {

    public NewItem = "";
    public UID;
    public FirebaseUrl: string;
    public ToDoList: Array<any> = [];



    constructor(private UIDProvider: UIDProvider) {

        this.UID = this.UIDProvider.UID;
        console.log(this.UID);
        this.FirebaseUrl = "users/" + this.UID;

    }


    ngOnInit() {

        var onQueryEvent = (result) => {
            // note that the query returns 1 match at a time
            // in the order specified in the query

            if (!result.error) {
                console.log("Event type: " + result.type);
                console.log("Key: " + result.key);
                console.log(result.value.task)
               // this.ToDoList.push(result.value.task)
              
            }
        };

        console.log("queried")
        firebase.query(
            onQueryEvent,
            this.FirebaseUrl,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.KEY
                },

            }
        );
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