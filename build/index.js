"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log(database_1.users);
console.log(database_1.product);
console.log(database_1.purchase);
(0, database_1.getAllUsers)();
(0, database_1.getAllProducts)();
(0, database_1.getProductById)("p001");
(0, database_1.queryProductsByName)("Uva");
database_1.createPurchase;
(0, database_1.getAllPurchasesFromUserId)("a002");
//# sourceMappingURL=index.js.map