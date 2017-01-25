import { Login } from "./pages/login/login";
import { List } from "./pages/list/list"


export const routes = [

    { path: "", component: Login },
    { path: "List", component: List }

];

export const navigatableComponents = [
    Login, List
];

