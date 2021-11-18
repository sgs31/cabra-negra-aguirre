import {firestore as db} from "./firebase"

const collection = db.collection("products")

export const getProducts = () => {
    const ret = []

    const promesa = collection.get()

    promesa.then(result => {
        result.docs.map(doc => ret.push(doc.data()))
    })
    
    return ret
}

export const getProductsByCategory = (category) => {
    const ret = []
    
    const query = collection.where("category", "==", category)
    let promesa = query.get()
    
    promesa.then(resultado => {
        resultado.docs.map(doc => {
            const product = {...doc.data()}
            ret.push(product)
        })
    })

    return ret
}

export const getProductById = async (idItem) => {

    let ret = "algo";
    
    const query = collection.where("id", "==", idItem)
    const promesa = query.get()
    
    await promesa.then(res => {
        res.docs.map(doc => {
            ret = {...doc.data()}
        })
    })

    return ret;
}


