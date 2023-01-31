import { TUsers, TProduct, TPurchase } from "./types"

export const users: TUsers[] = [
    {
        id: "a001",
        email : "tiagohbraga@gmail.com", 
        password : "entrei"
    },
    {
        id: "a002",
        email : "ludmila@gmail.com", 
        password : "oi"
    }
]


export const product: TProduct[] = [

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

]

export const purchase: TPurchase[] = [

    {
        userId: "a001",
        productId: "p001",
        quantity: 3,
        totalPrice: 15

    },

    {
        userId : "a002",
        productId : "p002",
        quantity : 3,
        totalPrice: 15
    }

]
