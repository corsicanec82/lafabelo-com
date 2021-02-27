const API_KEY = process.env.NEXT_PUBLIC_SNIPCART_API_KEY;

const loadSnipcart = () => {
  const div = document.createElement('div');
  div.setAttribute('hidden', '');
  div.setAttribute('id', 'snipcart');
  div.setAttribute('data-api-key', API_KEY);
  div.setAttribute('data-config-add-product-behavior', 'none');
  div.setAttribute('data-config-modal-style', 'side');

  const script = document.createElement('script');
  script.setAttribute('src', '/snipcart.js');
  script.setAttribute('async', '');

  document.body.append(div, script);
};

export default loadSnipcart;
