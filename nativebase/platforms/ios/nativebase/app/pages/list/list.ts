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

    NewItem = "";

    ToDoList: Array<any>;

    
    constructor(private firebaseServices: FirebaseServices) {
      

       
    }

    ngOnInit() {
      var x = this.firebaseServices.GetData();
      console.log("tasks =>", x);

    }

    

}