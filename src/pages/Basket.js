import React from 'react';

export default function BasketScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h1>My Basket</h1>
      <p>
        ADD TO Basket : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}