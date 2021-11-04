import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ItemListContainer from './components/Shop/ItemListContainer'
import Footer from './components/Footer/Footer'
import './index.css'

const CabraNegra = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <main className="main-container">
                   <Route path="/" component={ItemListContainer} exact/> 
                </main>
                {/* <ItemListContainer/> */}
                <Footer/>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<CabraNegra/>, document.getElementById("root"));
