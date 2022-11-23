import { app } from "./app";
import { getUsers } from "./endpoints/getAllUsers";
import { insertProduct } from "./endpoints/insertProducts";
import { insertUser } from "./endpoints/insertUser";
import { getProducts } from "./endpoints/getAllProducts";
import { purchaseRegister } from "./endpoints/purchaseRegister";
import { searchPurchase } from "./endpoints/ searchPurchase";

app.post("/users", insertUser);

app.get("/users", getUsers);

app.post("/products", insertProduct);

app.get("/products", getProducts);

app.post("/purchases", purchaseRegister);

app.get("/users/:user_id/purchases", searchPurchase);
