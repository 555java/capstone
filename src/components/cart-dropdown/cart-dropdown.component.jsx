import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
