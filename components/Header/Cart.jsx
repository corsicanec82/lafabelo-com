import Head from 'next/head';

const API_KEY = process.env.NEXT_PUBLIC_SNIPCART_API_KEY;

const Cart = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.css" />
      <script async src="https://cdn.snipcart.com/themes/v3.0.29/default/snipcart.js" />
    </Head>
    <div className="header-cart">
      <button type="button" className="btn btn-link icofont-cart snipcart-checkout">
        <span className="snipcart-total-price" />
      </button>
    </div>
    <div id="snipcart" data-api-key={API_KEY} hidden />
  </>
);

export default Cart;
