import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
  { title: 'Test1', price: 6, description: 'Product1', id: 1 },
  { title: 'Test2', price: 7, description: 'Product2', id: 2 },
  { title: 'Test3', price: 3, description: 'Product3', id: 3 },
  { title: 'Test4', price: 4, description: 'Product4', id: 4 },
  { title: 'Test5', price: 5, description: 'Product5', id: 5 },
];

const productItems = DUMMY_ITEMS.map((el, i) => {
  return (
    <ProductItem
      title={el.title}
      price={el.price}
      description={el.description}
      id={el.id}
      key={i}
    />
  );
});

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItems}</ul>
    </section>
  );
};

export default Products;
