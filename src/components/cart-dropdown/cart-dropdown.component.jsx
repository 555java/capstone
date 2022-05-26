import "./cart-dropdown.styles.scss";
import Button from "../button/button.component.jsx";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button> Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
