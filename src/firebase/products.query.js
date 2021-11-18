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

export const getProductById = (idItem) => {

    let ret;
    
    /* const query = collection.where("id", "==", id) */
    const query = collection.where("id", "==", idItem)
    const promesa = query.get()

    console.log("En la funcion", promesa)
    
    promesa.then(documento => {
        documento.docs.map(product => {
            console.log(product.data())
            ret = product.data()
        })
    })

    setTimeout(()=> console.log("antes de retornar", ret), 1000)
    return ret;
}


