import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
import { UIDProvider } from "../../shared/UID.Provider";


@Injectable()

export class FirebaseServices {



    private FirebaseUrl: string;

    constructor(private router: Router, private UIDProvider: UIDProvider) {

    }

    Login(Email, Password) {

        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: Email,
            password: Password
        })
            .then(res => {
                console.log("json version "+res.uid);
                this.UIDProvider.UID.next(res.uid);
                this.router.navigate(["List"]);
            }, error => {
                alert("this account is not recognized...");
            })


    };

    GetData(UID) {

        var MyData = [];
        this.FirebaseUrl = "users/" + UID;
        console.log("retrieving data from "+this.FirebaseUrl);
        var onQueryEvent = (result) => {
            if (!result.error) {
                console.log(result)
                for (let i in result.value.task) {   
                    MyData.push(result.value.task[i])
                }
                console.log(MyData);
                return MyData;
            } else {
                console.log("an error occured")
            }
        };

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