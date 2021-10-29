import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import ItemListContainer from './components/Shop/ItemListContainer'

const App = () => {
    return(
        <div>
            <Header/>
            <ItemListContainer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
