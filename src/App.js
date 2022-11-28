import { useReducer, useState } from 'react';
import './App.css';
import Meals from './components/meals/meals';
import CardContext from './store/card-context';
import Filtermeals from './components/filterMeals/filterMeals';
import Cart from './components/Cart/cart';
//import Backdrop from './components/UI/backdrop/backdrop';



const MealsData = [
  {
      id: '1',
      title: '汉堡包',
      desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
      price: 12,
      img: '/img/meals/1.png'
  },
  {
      id: '2',
      title: '双层吉士汉堡',
      desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
      price: 20,
      img: '/img/meals/2.png'
  },
  {
      id: '3',
      title: '巨无霸',
      desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
      price: 24,
      img: '/img/meals/3.png'
  }, {
      id: '4',
      title: '麦辣鸡腿汉堡',
      desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
      price: 21,
      img: '/img/meals/4.png'
  }, {
      id: '5',
      title: '板烧鸡腿堡',
      desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
      price: 22,
      img: '/img/meals/5.png'
  }, {
      id: '6',
      title: '麦香鸡',
      desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
      price: 14,
      img: '/img/meals/6.png'
  }, {
      id: '7',
      title: '吉士汉堡包',
      desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
      price: 12,
      img: 'img/meals/7.png'
  }
];
function App() {

 const cartReducer = (state,action) => {
    
    const newCart = {...state}

    switch(action.type){
      case 'addItem' : 
         if (newCart.items.indexOf(action.meal) === -1) {
         newCart.items.push(action.meal);
         action.meal.amount = 1;
         } else {
         action.meal.amount += 1;
         }
         newCart.totalAmount += 1;
         newCart.totalPrice += action.meal.price;
         return newCart
      case 'removeItem' :
        action.meal.amount -= 1;
        if (action.meal.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
        }
        newCart.totalAmount -= 1;
        newCart.totalPrice -= action.meal.price;
        return newCart;
      case 'clearCart' :
        newCart.items.forEach(item => delete item.amount)
        newCart.items = []
        newCart.totalAmount = 0 
        newCart.totalPrice = 0
        return newCart
    }
 }


const [mealsData,setMealsData] = useState(MealsData)


const [cartData,cartDispatch] = useReducer(cartReducer,
    {
      items: [],
      totalAmount: 0,
      totalPrice: 0
    }
  )
  
// const [cartData, setCartData] = useState({
//     items: [],
//     totalAmount: 0,
//     totalPrice: 0
// });

// const addItem = (meal) => {

//     const newCart = {...cartData}

//     if (newCart.items.indexOf(meal) === -1) {
//       // 将meal添加到购物车中
//       newCart.items.push(meal);
//       // 修改商品的数量
//       meal.amount = 1;
//   } else {
//       // 增加商品的数量
//       meal.amount += 1;
//   }
//   // 增加总数
//   newCart.totalAmount += 1;
//   // 增加总金额
//   newCart.totalPrice += meal.price;

//   // 重新设置购物车
//   setCartData(newCart);
// } 

// const removeItem = (meal) => {
//   // 复制购物车
//   const newCart = {...cartData};

//   // 减少商品的数量
//   meal.amount -= 1;

//   // 检查商品数量是否归0
//   if (meal.amount === 0) {
//       // 从购物车中移除商品
//       newCart.items.splice(newCart.items.indexOf(meal), 1);
//   }

//   // 修改商品总数和总金额
//   newCart.totalAmount -= 1;
//   newCart.totalPrice -= meal.price;

//   setCartData(newCart);
// };

// const clearCart = (meal) => {
 
//   const newCart = {...cartData}
//   newCart.items.forEach(item => delete item.amount)
//   newCart.items = []
//   newCart.totalAmount = 0 
//   newCart.totalPrice = 0
//   setCartData(newCart)
// }

const filterHandler = (keyWord) => {
    if (!keyWord) {
      setMealsData(MealsData);
      return;
    }
    const newMealsData = MealsData.filter(item => item.title.includes(keyWord));
    newMealsData.length && setMealsData(newMealsData); // 当过滤出数据之后 给展示数组赋值
    // 当未过滤出数据时，提示用户 暂无商品
}

  return (
    <CardContext.Provider 
    value={{...cartData,cartDispatch}}>

      <div>
      <Filtermeals onFilter={filterHandler}></Filtermeals> 
      <Meals mealsData={mealsData}></Meals>
      <Cart></Cart>
      {/*<Backdrop></Backdrop>*/}
      </div>

    </CardContext.Provider>

    
  );
}

export default App;
