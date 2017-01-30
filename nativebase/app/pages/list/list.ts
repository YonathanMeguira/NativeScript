import { Component } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css']
})



export class List {

    public ToDoList = [];
    public NewItem = "";
    public UID;
    public FirebaseUrl: string;

    constructor(private router: ActivatedRoute) { 
        this.router.queryParams.subscribe(params => {
            this.UID = params["UID"];
            this.FirebaseUrl = "users/"+this.UID;
        })
    }

    AddItemToList() {

        console.log(this.NewItem)
        if (this.ToDoList.some(x => x === this.NewItem)) {
            alert("your to do list already contains this tak")
        } else if (this.NewItem === "") {
            alert("new task can not be nul")
        } else {
            this.ToDoList.push(this.NewItem)
            console.log(this.FirebaseUrl)
            firebase.setValue(
                this.FirebaseUrl,
                { task: this.NewItem }
            );
            this.NewItem = "";
        }
    }
}