import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItemArr = useSelector((state) => state.cart.items);
  const cartItems = cartItemArr.map((el, i) => {
    return (
      <CartItem
        item={{
          title: el.title,
          quantity: el.quantity,
          total: el.total,
          price: el.price,
          id: el.id,
        }}
        key={i}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6, id: 1 }}
        /> */}
        {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;
