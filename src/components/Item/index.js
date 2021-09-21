import React from 'react'
import { inject, observer } from 'mobx-react'
import './index.css'

function Item(props) {
    const { cartStore, ...item } = props

    const handleAdd = () => {
        cartStore.handleAdd(item)
    }

    return <div className="item">
        <div className="img" style={{
            backgroundImage: `url(${item.backgroundImage})`,
        }}>

        </div>
        <div className="bottom">
            <span className="item-name">
                {item.name}
            </span>
            <div className="item-priceWrapper">
                <span className="item-priceWrapper-price">
                    {item.price}
                </span>
                <span className="item-priceWrapper-addBtn">
                    <button onClick={handleAdd}>加入购物车</button>
                </span>
            </div>
        </div>
    </div>
}

export default inject('cartStore')(observer(Item))