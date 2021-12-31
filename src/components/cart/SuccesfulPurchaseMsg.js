import { useHistory, useParams } from 'react-router-dom'

const SuccesfulPurchaseMsg = () => {
    
    const {id} = useParams();

    return (
        <>
        <p>
            Tu compra se realizo con exito! El ID de tu compra es: <b>{id}</b>
        </p>
        <p>
            Gracias por confiar en nosotros.
        </p>
        </>
        
    )
}

export default SuccesfulPurchaseMsg;
