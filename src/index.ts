import express, { Request, Response } from 'express'
import cors from 'cors'

import {users, 
    product, 
    purchase, 
    getAllUsers, 
    getAllProducts, 
    getProductById, 
    queryProductsByName,
    createPurchase,
    getAllPurchasesFromUserId
} from "./database"
import { TProduct, TUsers, TPurchase } from './types'

console.log(users)
console.log(product)
console.log(purchase)
getAllUsers()
getAllProducts()
getProductById("p001")
queryProductsByName("Uva")
createPurchase
getAllPurchasesFromUserId("a002")

// console.log("Olá")

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () =>{
    console.log('Servidor rodando na porta 3003 com sucesso!')
})

app.get('/ping',(req: Request, res: Response) => {
    res.send('Pong!')
})

app.get('/users', (req: Request, res: Response) =>{
    res.status(200).send(users)
})

app.get('/product', (req: Request, res: Response) => {
    res.status(200).send(product)
})

app.get('/product/search', (req: Request, res: Response) => {
    const q = req.query.q as string
    const result = product.filter((product)=>{
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    res.status(200).send(result) 
})

app.post('/users', (req: Request, res: Response)=>{
    const {id, email, password} = req.body as TUsers

    const newUser = {
        id,
        email,
        password
    }
    users.push(newUser)
    res.status(201).send('Cadastrado com sucesso!')
})

app.post('/products', (req: Request, res: Response)=>{
    const {id, name, price, category} = req.body as TProduct

    const newProduct = {
        id,
        name,
        price,
        category
    }
    product.push(newProduct)
    res.status(201).send('Produto cadastrado com sucesso!')
})

app.post('/purchase', (req: Request, res: Response)=>{
    const {userId, productId, quantity, totalPrice} = req.body as TPurchase

    const newPurchase = {
        userId, 
        productId, 
        quantity, 
        totalPrice
    }
    res.status(201).send("Compra cadastrada com sucesso!")
})