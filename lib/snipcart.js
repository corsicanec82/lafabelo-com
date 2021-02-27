export const updateCartTotalPrice = (state) => {
  const { currency, total } = state.cart;
  const { currencies } = state.session.settings;
  const { currencySymbol } = currencies.find((item) => item.currency === currency);
  const totalPrice = `${total.toFixed(2)} ${currencySymbol}`;
  const cartTotalPrice = document.querySelector('.cart-total-price');
  cartTotalPrice.textContent = totalPrice;
};

const configureSnipcart = () => {
  const { Snipcart } = window;

  if (!Snipcart) {
    return;
  }

  let currency;
  let total;
  Snipcart.store.subscribe(() => {
    const previousCurrency = currency;
    const previousTotal = total;
    const state = Snipcart.store.getState();
    currency = state.cart.currency;
    total = state.cart.total;

    if (previousCurrency !== currency || previousTotal !== total) {
      updateCartTotalPrice(state);
    }
  });
};

export const loadSnipcart = () => {
  const API_KEY = process.env.NEXT_PUBLIC_SNIPCART_API_KEY;

  const div = document.createElement('div');
  div.hidden = true;
  div.id = 'snipcart';
  div.setAttribute('data-api-key', API_KEY);
  div.setAttribute('data-config-add-product-behavior', 'none');
  div.setAttribute('data-config-modal-style', 'side');
  div.setAttribute('data-templates-url', '/snipcart-templates.html');

  const script = document.createElement('script');
  script.src = '/snipcart.js';
  script.async = true;

  document.body.append(div, script);
  window.addEventListener('load', configureSnipcart);
};
