import model from '../../assets/home-model.gif'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import './styles/Home.css'

const Home = () => {
    
    const { isEmpty } = useContext(CartContext)
    const { push } = useHistory()
    
    return (
        <main className="home">
            <img className="home-model" src={model} alt="model" />
            <section className="home-presentation">
                <h1>Podemos encontrar belleza en la oscuridad</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione maxime laboriosam, atque dolores nihil, labore ullam laudantium et quam sit excepturi amet alias? Laborum in recusandae quia blanditiis a!</p>
                <button onClick={() => push("./shop")}>{isEmpty() ? "Empezar a comprar" : "Seguir comprando"}</button>
            </section>
        </main>
    )
}

export default Home
