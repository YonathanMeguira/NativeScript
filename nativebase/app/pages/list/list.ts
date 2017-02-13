import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { UIDProvider } from "../../shared/UID.Provider";

import { FirebaseServices } from "../Login/Firebase.services";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";


@Component({
    selector: "List",
    templateUrl: "pages/list/list.html",
    styleUrls: ['pages/list/style.css'],
    providers: [FirebaseServices, UIDProvider]
})



export class List implements OnInit {

    NewItem = "";

    ToDoList: Array<any>;

    constructor(private firebaseServices: FirebaseServices, private UIDProvider: UIDProvider) { }

    ngOnInit() {
            this.UIDProvider.GetUID().subscribe(res => {
             this.firebaseServices.GetData(res)
            console.log("coucou you should see some data right about now")
            this.ToDoList.push(res);
        });
    }

}