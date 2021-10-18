import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
    return(
        <div>
            <Header/>
            <ItemListContainer greeting="Esperando por items"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
