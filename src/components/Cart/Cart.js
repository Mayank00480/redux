import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux'
const Cart = (props) => {
  const items = useSelector(state => state.addItem.items )
  
  const isCartVisible = useSelector(state => state.cart.showCart)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       {isCartVisible && items.map(item => {
      return <><CartItem
          item={{ title: item.title, quantity: item.quantity, price: item.price ,total : item.totalPrice , id : item.id}}
        /></>
       })
      }
      </ul>
    </Card>
  );
};

export default Cart;
