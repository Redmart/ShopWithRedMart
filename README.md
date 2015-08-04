# Shop With Redmart

This script tag allows you, the vendor, to place an unobtrusive pathway from your website to your page on the Redmart Marketplace. This will help increase sales of your products by allowing your customers to easily access your Marketplace page. 
To have the tag on your website, copy the code bellow and put it in the HTML of your website in the <head> section. Publishing this on your website will create a small image in the bottom right of your website which links to the marketplace. 

This tag was made using a seamless and borderless iframe that calls the shop with redmart icon. The only thing you have to edit in the script is the last part of the url which is yours. For example, if your site is Realfood, then you would replace **YOUR-VENDOR-HERE** with **realfood**. Or if your site is Spanish Gourmet, you would replace **YOUR-VENDOR-HERE** with **spanish-gourmet**
```html
<script type="text/javascript" src="http://shopwithredmart.herokuapp.com/swr-js.js"></script>
<script type="text/javascript">
  new ShopWithRedmart().init({
    url: 'https://redmart.com/marketplace/YOUR-VENDOR-HERE'
  });
</script>
```
