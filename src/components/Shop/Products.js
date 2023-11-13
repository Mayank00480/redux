import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const dummyItems = [{
    id : 'p1',
    title : 'TestItem1',
    quantity : 1,
    price : 6,
    description : 'this is Item 1'
  },
{ 
  id : 'p2',
  title : 'TestItem2',
  quantity : 1,
  price : 8,
  description : 'This is Item 2'

}
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          dummyItems.map(item => {
            return  <ProductItem
            id = {item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            quantity = {item.quantity}
          />
          })
       
}
      </ul>
    </section>
  );
};

export default Products;
