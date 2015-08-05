(function() {

  ShopWithRedmart = function() { //needed for ShopWithRedmart.prototype.init
    
  }


  ShopWithRedmart.prototype.init = function(options) {
    console.log('init');
    window.onload = function () {
      var ifrm = document.createElement('iframe'); //creates the iframe
      ifrm.setAttribute('id', 'shop_with_redmart'); //gives the iframe an id
      ifrm.setAttribute('src', 'http://shopwithredmart.herokuapp.com/?url='+options.url); //takes the url from the index html and places it in place of options.url
      ifrm.style.display = "inline";
      ifrm.setAttribute('width', '60');
      ifrm.setAttribute('height', '60'); //creates height and width of the iframe
      ifrm.setAttribute('frameBorder', '0'); //no border
      ifrm.setAttribute('scrolling', 'no');
      ifrm.setAttribute('seamless', 'yes');
      ifrm.style.position = "fixed";
      ifrm.style.bottom="0px";
      ifrm.style.right="0px"; //positions the frame to be in the bottom right
      document.body.appendChild(ifrm); //displays the iframe

    }
  }

}());
