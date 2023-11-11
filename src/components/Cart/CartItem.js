import classes from './CartItem.module.css';
import {useSelector} from 'react-redux'
const CartItem = (props) => {
  const cartItems = useSelector(state => state.cartItems)
  const { title, quantity, total, price } = props.item;
console.log(cartItems)
  
   
    return (<>{
    cartItems && 
     cartItems.map(item => {
      return <li id = {Math.random.toString()} className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.price}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li> 
     }) }
  </> 
  )
  
    }
export default CartItem;
