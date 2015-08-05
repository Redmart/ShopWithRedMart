(function() {

  this.ShopWithRedmart = function() {
    console.log('constructor');
  }


  ShopWithRedmart.prototype.init = function(options) {
    console.log('init');
    window.onload = function () {
      var ifrm = document.createElement('iframe');
      ifrm.setAttribute('id', 'shop_with_redmart');
      ifrm.setAttribute('src', 'http://shopwithredmart.herokuapp.com/?url='+options.url);
      ifrm.style.display = "inline";
      ifrm.setAttribute('width', '60');
      ifrm.setAttribute('height', '60');
      ifrm.setAttribute('frameBorder', '0');
      ifrm.setAttribute('scrolling', 'no');
      ifrm.setAttribute('seamless', 'yes');
      ifrm.style.position = "fixed";
      ifrm.style.bottom="0px";
      ifrm.style.right="0px";
      document.body.appendChild(ifrm);

    }
  }

}());
