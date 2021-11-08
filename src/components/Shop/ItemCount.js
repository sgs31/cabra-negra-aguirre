import './styles/ItemCount.css'

const ItemCount = ({initial, onAdd, onSub}) => {   

return (
        <div className="item-count">
            <button onClick={onSub}><img src="https://icongr.am/octicons/chevron-down.svg?size=20&color=currentColor" alt="add" /></button>
            <span>{initial}</span>
            <button onClick={onAdd}><img src="https://icongr.am/octicons/chevron-up.svg?size=20&color=currentColor" alt="add" /></button>
        </div>
    )
}

export default ItemCount;