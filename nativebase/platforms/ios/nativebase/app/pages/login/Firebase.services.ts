import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()

export class FirebaseServices {



    public FirebaseUrl: string;
    constructor(private router: Router) {

    }

    Login(Email, Password) {

        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: Email,
            password: Password
        })
            .then(res => {
                console.log("json version " + res.uid);
                this.FirebaseUrl = "users/" + res.uid;
                this.GetData();
                this.router.navigate(["List"]);
            }, error => {
                alert("this account is not recognized...");
            })


    };

    GetData() {

        console.log("retrieving data from " + this.FirebaseUrl);
        var onQueryEvent = (result) => {
            if (!result.error) {
                var tasks = result.value.task;
                console.log(tasks);
            } else {
                console.log("an error occured")
            }
        }
        firebase.query(
            onQueryEvent,
            this.FirebaseUrl,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.KEY
                }
            }
        )
    }

    SignUp(Email, Password) {
        firebase.createUser({
            email: Email,
            password: Password
        })

    }

}