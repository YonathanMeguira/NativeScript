import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");


@Injectable()

export class TaskService {

    GetTasks(url: string):  any {

        var onQueryEvent = (result) => {
            // note that the query returns 1 match at a time
            // in the order specified in the query

            if (!result.error) {
                console.log("Event type: " + result.type);
                console.log("Key: " + result.key);
                /*for (let i in result.value.task) {
                    list.push(result.value.task[i])
                }
                console.log("list : ")
                console.log(list);*/
                console.log(result.value.task)
                return result.value.task;
            }
        };
        console.log("queried")
        firebase.query(
            onQueryEvent,
            url,
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.KEY
                },

            }
        );
    }
}