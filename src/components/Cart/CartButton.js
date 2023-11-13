import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { cartAction } from '../store';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const total = useSelector(state => state.addItem.totalQuantity )
  const clickHandler = () =>{
    dispatch(cartAction.toggleCart())   
  }
  return (
    <button onClick = {clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
