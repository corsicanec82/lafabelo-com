import { useEffect } from 'react';

import { updateCartTotalPrice } from '../../lib/snipcart.js';

const Cart = () => {
  useEffect(() => {
    const { Snipcart } = window;

    if (!Snipcart) {
      return;
    }

    const state = Snipcart.store.getState();
    updateCartTotalPrice(state);
  }, []);

  return (
    <>
      <div className="header-cart">
        <button type="button" className="btn btn-link icofont-cart snipcart-checkout">
          <span className="cart-total-price" />
        </button>
      </div>
    </>
  );
};

export default Cart;
