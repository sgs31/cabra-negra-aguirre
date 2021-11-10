import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import CartState from './components/context/cart/CartState'
import Header from './components/header/Header'
import ItemListContainer from './components/shop/ItemListContainer'
import ItemDetailContainer from './components/shop/ItemDetailContainer'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
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
                    <Route path="/cart" component={Cart} exact/>
                </main>
                <Footer/>
            </BrowserRouter>
        </CartState>
    )
}

ReactDOM.render(<CabraNegra/>, document.getElementById("root"));
