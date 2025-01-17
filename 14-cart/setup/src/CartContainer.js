import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart,dispatchCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${(cart.reduce((acc,cr)=>{
            
            return (acc+cr.price*cr.amount)},0)).toFixed(2)}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={()=>dispatchCart({type:'CLEAR',id:null})}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
