import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHAndler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div>No items</div>
        )}
      </div>
      <Button onClick={goToCheckoutHAndler}> Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
