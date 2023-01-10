"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.users = void 0;
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
        category: "Fruta"
    },
    {
        id: "p002",
        name: "Maça",
        price: 5,
        category: "Fruta"
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
//# sourceMappingURL=database.js.map