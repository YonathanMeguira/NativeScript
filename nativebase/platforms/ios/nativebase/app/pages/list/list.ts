import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { FirebaseServices } from "../Login/Firebase.services";



@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css'],
    providers: [FirebaseServices]
})



export class List implements OnInit {

    public ToDoList: Array<any> = [];



    constructor(private firebaseServices: FirebaseServices) {

    }

    ngOnInit() {
        console.log("inside list controller");

    }

    Get() {
        this.ToDoList.push(this.firebaseServices.task);
        console.log(this.ToDoList)
    }
    

}