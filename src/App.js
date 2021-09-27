import Item from './components/Item'
import Cart from './components/Cart'
import Mock, { Random } from 'mockjs'
import { inject, observer } from 'mobx-react'
import './App.less'

/**
 * 设计: 
 * less + mock + mobx + mocha测试[未做]
 */

const data = Mock.mock({
  'list|10-15': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'imgWidth': '@integer(100,500)',
      'imgHeight': '@integer(100,500)',
      'name': '苹果-广西南宁自治县巴拉巴拉~',
      'backgroundColor': Random.color(),
      'backgroundImage': Random.image('500x@imgHeight'), // 高度不统一时宽度不可使用相同方式指定
      "price|1-100.2": 1,
    }
  ]
})

function App() {
  return (
    <div className="shopping-cart">
      <header className="header">
        <h2 className="header-title">
          购物天堂
        </h2>
        <span className="header-cart">
          <button>购物车</button>
          <div className='cart-wrapper'>
            <Cart />
          </div>
        </span>
      </header>

      <div className="content">
        {
          data.list.map(i => {
            return <Item key={i.id} {...i} />
          })
        }
      </div>
    </div>
  );
}

export default App;

