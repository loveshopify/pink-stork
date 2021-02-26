(function() {
  var checkout = document.getElementsByName('checkout')[0];
  var idme = `<div class="idme-shopify">
    <span class='idme-btn-affinity'>Military receive 10% off. New subtotal will be shown on next page.</span>
    <span class="idme-btn-unify">
      <a href="https://shopify.id.me/oauth/checkpoint/pink-stork" >
        <img src="https://cdn.shopify.com/s/files/1/0121/9143/2800/files/18.png?v=1571424708" alt="ID.me">
      </a>
    </span>

    <span class='idme-btn-verification'>
      <img alt='Lock' src='https://s3.amazonaws.com/idme/assets/lock.png' class='idme-btn-lock' width='8'>
      Verification by ID.me &bull;
      <a href='https://www.id.me/about' class='idme-about-link' target='_new'>
        What is ID.me?
      </a>
    </span>
  </div>`;

  checkout.insertAdjacentHTML("afterend", idme);
})();

