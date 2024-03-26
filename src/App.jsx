import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const show = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const changed = useSelector((state) => state.cart.changed);
  console.log(show);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCartData());
      return;
    }
    if (changed) {
      dispatch(
        sendCartData({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        })
      );
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
