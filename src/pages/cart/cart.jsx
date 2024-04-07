import React,{useContext} from 'react'
import { PRODUCTS } from '../../../product'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cartItem.jsx'
const Cart = () => {
    const {addToCart, cartItems,getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>

      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) =>{
            {if (cartItems[product.id] !==0){
                return <CartItem data={product}/>
            }}
        })}
        {totalAmount > 0 ?
        <div className="checkout">
             
            <p>Subtotal: $ {totalAmount}</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        </div>:(<h1>"Your cart is empty"</h1>)}
      </div>
    </div>
  )
}

export default Cart
