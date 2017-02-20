import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Injectable()

export class FirebaseServices {



    public FirebaseUrl: any;
    public ToDos: Observable<Array<string>>;
    public task: Array<any> = [];
    private anyErrors: boolean;
    private finished: boolean;
    constructor(private router: Router) {

    }

    Login(Email, Password) {

        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: Email,
            password: Password
        })
            .then(res => {
                this.FirebaseUrl = "users/" + res.uid;
                this.router.navigate(["List"]);
                return this.FirebaseUrl;
            })
            .then((FirebaseURL) => {
                this.GetData(FirebaseURL);
            },
            error => {
                alert("this account is not recognized...");
            })


    };

    GetData(FBURL) {

        var onQueryEvent = (result) => {
            if (!result.error) {
                var tasks = result.value.task;
                console.log(tasks);
                this.ToDos = new Observable(observer => {
                    observer.next(tasks);
                    observer.complete();
                });
                let subscription = this.ToDos.subscribe(
                    value => this.task.push(value),
                    error => this.anyErrors = true,
                    () => this.finished = true
                );
            } else {
                console.log("an error occured")
            }
        }

        firebase.query(
            onQueryEvent,
            FBURL,
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