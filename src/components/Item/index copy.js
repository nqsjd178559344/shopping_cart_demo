import React from 'react'
import {inject,observer} from 'mobx-react'
import './index.css'

@inject('cartStore')
@observer
export default function Item(props) {
    const handleAdd = () => {
        this.
    }

    return <div className="item">
        <div className="img" style={{
            backgroundImage: `url(${props.backgroundImage})`,
        }}>

        </div>
        <div className="bottom">
            <span className="item-name">
                {props.name}
            </span>
            <div className="item-priceWrapper">
                <span className="item-priceWrapper-price">
                    {props.price}
                </span>
                <span className="item-priceWrapper-addBtn">
                    <button onClick={handleAdd}>加入购物车</button>
                </span>
            </div>
        </div>
    </div>
}