import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getUserByType } from "./endpoints/getUserByType";

app.get("/recipes", getAllRecipes);
app.get("/getAllUserByType/:type", getUserByType);
