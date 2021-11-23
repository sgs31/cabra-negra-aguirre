import {firestore as db} from './firebase'

const collection = db.collection("orders")

export const sendOrder = async(order) => {
   
        const addOrderToCollection = await collection.add(order)
        return addOrderToCollection
}