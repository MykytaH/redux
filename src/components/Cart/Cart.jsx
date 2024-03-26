import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.items);

  const cartNotEmpty = cart.length > 0;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartNotEmpty ? (
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.price * item.quantity,
                price: item.price,
              }}
            />
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
    </Card>
  );
};

export default Cart;
