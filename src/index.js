import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import CartState from './components/context/cart/CartState'
import Header from './components/Header/Header'
import ItemListContainer from './components/Shop/ItemListContainer'
import ItemDetailContainer from './components/Shop/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import './index.css'

const CabraNegra = () => {
    return(
        <CartState>  
            <BrowserRouter>
                    <Header/>
                    <main className="main-container">
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/shop/:gender" component= {ItemListContainer} exact/>
                    <Route path="/item/:id" component={ItemDetailContainer} exact/>
                    </main>
                    <Footer/>
            </BrowserRouter>
        </CartState>
    )
}

ReactDOM.render(<CabraNegra/>, document.getElementById("root"));
