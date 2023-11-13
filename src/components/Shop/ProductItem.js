import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux'
import { itemAction } from '../store';
const ProductItem = (props) => {
 const dispatch = useDispatch()
  const {id , title,quantity, price, description } = props;
  const addItem = () =>{
    const obj = {
      title : title,
      price : price,
      description : description,
      id : id,
      quantity : quantity
    } 
    console.log(obj)
     dispatch(itemAction.addItems(obj));
  } 
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick = {addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
