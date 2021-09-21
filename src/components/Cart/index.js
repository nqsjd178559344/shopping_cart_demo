import React from 'react'
import { inject, observer } from 'mobx-react'
import './index.css'

function Cart({ cartStore }) {

    const handleDel = (item) => {
        cartStore.handleDel(item)
    }

    const handleBuy = ()=>{
        const sum  = cartStore.list.reduce((prev,cur)=>{
            const targetSum = cur.price *  cur.num
            return prev += targetSum
        },0)
        // 暂时处理精度问题
        const newSum = sum.toFixed(2)
        alert(newSum)
    }
    return <div className='cart'>
        {
            cartStore.list.map(i => {
                return <div key={i.id} className='cart-item'>
                    <div className='cart-name'>
                        {i.name}
                    </div>
                    <span>
                        {i.price}
                    </span>
                    *
                    <span>
                        {i.num}
                    </span>
                    <span className='cart-del'>
                        <button onClick={() => handleDel(i)}>删除</button>
                    </span>
                </div>
            })
        }
        <button onClick={handleBuy}>购买</button>
    </div>
}

export default inject('cartStore')(observer(Cart))
