import { TUsers, TProduct, TPurchase, PRODUCT_CATEGORY } from "./types"


export const users: TUsers[] = [
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
]


export const product: TProduct[] = [

    {
        id: "p001",
        name: "Banana",
        price: 5,
        category: PRODUCT_CATEGORY.FRUITS
    },

    {
        id: "p002",
        name: "Maça",
        price: 5,
        category: PRODUCT_CATEGORY.FRUITS
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
        userId: "a002",
        productId: "p002",
        quantity: 3,
        totalPrice: 15
    }

]

const createUser = (id: string, email: string, password: string) => {
    let newUser = {
        id: id,
        email: email,
        password: password
    }
    return users.push(newUser)
}
export const getAllUsers = ()=>{
    return console.table(users)
}
createUser("a003", "fula@gmail.com", "fulano123")

const createProduct = (id : string, name : string, price : number, category : PRODUCT_CATEGORY) => {
    let newProduct ={
        id:id,
        name:name,
        price:price,
        category:category
    }
    return product.push(newProduct)
}
export const getAllProducts = () =>{
    return console.table(product)
}
createProduct("p003", "Uva", 5, PRODUCT_CATEGORY.FRUITS)

export const getProductById = (id:string)=>{
    let idToSearch = product.filter((product)=>{
        return product.id === id
    })
    return console.table(idToSearch)
}

export const queryProductsByName = (name:string)=>{
    let nameToSearch = product.filter((product)=>{
        return product.name === name
    })
    return console.table(nameToSearch)
}

export const createPurchase = (userId : string, productId: string, quantity: number, totalPrice: number)=>{
    let newPurchase ={
        userId:userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice
    }
    return purchase.push(newPurchase)
}
createPurchase("a003", "p003", 3, 15)

export const getAllPurchasesFromUserId =(userId: string)=>{
    let userIdToSearch = purchase.filter ((purchase)=>{
        return purchase.userId === userId
    })
    return console.table(userIdToSearch)
}
