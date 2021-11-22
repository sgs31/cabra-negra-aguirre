import {firestore as db} from "./firebase"

const collection = db.collection("products")

export const getProducts = async () => {

    const documents = await collection.get()
    const documentsCollection = documents.docs
    const documentsData = documentsCollection.map(doc => {
        let ret = doc.data()
        return ret
    })
    
    return documentsData
}

export const getProductsByCategory = async (category) => {
    
    const documents = await collection.where("category", "==", category)
    const documentsByCategory = await documents.get()
    const documentsData = documentsByCategory.docs.map(doc => {
        let ret = doc.data()
        return ret
    })

    return documentsData
}

export const getProductById = async (idItem) => {

    const query = await collection.where("id", "==", idItem)
    const product = await query.get()
    let productData = product.docs.map(doc => doc.data())
    productData = productData.pop()

    return productData;
}


