export enum PRODUCT_CATEGORY {FRUITS = "Frutas", VEGETABLES = "Vegetais", CANDY = "Doces"}

export type TUsers = {id : string, email : string, password : string } 


export type TProduct = {id : string, name : string, price : number, category : PRODUCT_CATEGORY}


export type TPurchase = {userId : string, productId: string, quantity: number, totalPrice: number}
