<?php 
 
// Product Details  
// Minimum amount is $0.50 US  
$productName = "Codex Demo Product";  
$productID = "DP12345";  
$productPrice = 55; 
$currency = "inr"; 
  
/* 
 * Stripe API configuration 
 * Remember to switch to your live publishable and secret key in production! 
 * See your keys here: https://dashboard.stripe.com/account/apikeys 
 */ 
define('STRIPE_API_KEY', 
        'sk_test_51NBy9HSAM0BKKCMCQSXj9YEvdr97kWFywWnpGZ0cXx0ZM4BhoG6r7YsTFyTS6bR0ZRaIsi2rhbdNSAcFIZMCnjuV00hixO5DgS'); 
define('STRIPE_PUBLISHABLE_KEY', 
        'pk_test_51NBy9HSAM0BKKCMCgSl8pdwi9gNWuzUriHD0yGkK10DwlBPXhpHj5v7KCoxlL9IwSXC0PxNfx7SzuiRaKAFvO87W00YGEGkWMv'); 
define('STRIPE_SUCCESS_URL', 'http://localhost/strip_payment/payment-success.php'); //Payment success URL 
define('STRIPE_CANCEL_URL', 'http://localhost/strip_payment/payment-cancel.php'); //Payment cancel URL 
    
// Database configuration    
define('DB_HOST', 'localhost');   
define('DB_USERNAME', 'root'); 
define('DB_PASSWORD', '');   
define('DB_NAME', 'codexworld'); 
 
?>