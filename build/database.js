"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.getAllUsers = exports.purchase = exports.product = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    {
        id: "a001",
        email: "tiagohbraga@gmail.com",
        password: "entrei"
    },
    {
        id: "a002",
        email: "ludmila@gmail.com",
        password: "oi"
    }
];
exports.product = [
    {
        id: "p001",
        name: "Banana",
        price: 5,
        category: types_1.PRODUCT_CATEGORY.FRUITS
    },
    {
        id: "p002",
        name: "Maça",
        price: 5,
        category: types_1.PRODUCT_CATEGORY.FRUITS
    }
];
exports.purchase = [
    {
        userId: "a001",
        productId: "p001",
        quantity: 3,
        totalPrice: 15
    },
    {
        userId: "a002",
        productId: "p002",
        quantity: 3,
        totalPrice: 15
    }
];
const createUser = (id, email, password) => {
    let newUser = {
        id: id,
        email: email,
        password: password
    };
    return exports.users.push(newUser);
};
const getAllUsers = () => {
    return console.table(exports.users);
};
exports.getAllUsers = getAllUsers;
createUser("a003", "fula@gmail.com", "fulano123");
const createProduct = (id, name, price, category) => {
    let newProduct = {
        id: id,
        name: name,
        price: price,
        category: category
    };
    return exports.product.push(newProduct);
};
const getAllProducts = () => {
    return console.table(exports.product);
};
exports.getAllProducts = getAllProducts;
createProduct("p003", "Uva", 5, types_1.PRODUCT_CATEGORY.FRUITS);
const getProductById = (id) => {
    let idToSearch = exports.product.filter((product) => {
        return product.id === id;
    });
    return console.table(idToSearch);
};
exports.getProductById = getProductById;
const queryProductsByName = (name) => {
    let nameToSearch = exports.product.filter((product) => {
        return product.name === name;
    });
    return console.table(nameToSearch);
};
exports.queryProductsByName = queryProductsByName;
const createPurchase = (userId, productId, quantity, totalPrice) => {
    let newPurchase = {
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice
    };
    return exports.purchase.push(newPurchase);
};
exports.createPurchase = createPurchase;
(0, exports.createPurchase)("a003", "p003", 3, 15);
const getAllPurchasesFromUserId = (userId) => {
    let userIdToSearch = exports.purchase.filter((purchase) => {
        return purchase.userId === userId;
    });
    return console.table(userIdToSearch);
};
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map