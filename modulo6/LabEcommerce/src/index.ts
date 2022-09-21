import { app } from "./app";
import { insertUser } from "./endpoints/insertUser";

app.post("/users", insertUser);
