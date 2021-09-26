import Item from './components/Item'
import Cart from './components/Cart'
import Mock, { Random } from 'mockjs'
import './App.less'

import './utils/rem'

const data = Mock.mock({
  'list|10-15': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'imgWidth': '@integer(100,500)',
      'imgHeight': '@integer(100,500)',
      'address': Random.county(true),
      'name': '苹果',
      "name|+1": [
        "苹果",
        "橘子",
        "柠檬",
        "榴莲",
        "荔枝",
        "龙眼",
        "葡萄",
        "水蜜桃",
        "柚子",
        "李子",
        "栗子",
        "梨",
        "哈密瓜",
        "香瓜",
        "西瓜",
      ],
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

