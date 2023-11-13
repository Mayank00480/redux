import classes from './CartItem.module.css';
import {useSelector} from 'react-redux'
import { itemAction } from '../store';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price ,id} = props.item;

  
   console.log(id)
    return (<>{
    <li id = {Math.random.toString()} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick = {() =>{
               dispatch(itemAction.removeItem(id))
          }}>-</button>
          <button>+</button>
        </div>
      </div>
    </li> 
     }
  </> 
  )
  
    }
export default CartItem;
