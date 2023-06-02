import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_test_51NBy9HSAM0BKKCMCgSl8pdwi9gNWuzUriHD0yGkK10DwlBPXhpHj5v7KCoxlL9IwSXC0PxNfx7SzuiRaKAFvO87W00YGEGkWMv");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
   
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
const btnSubmit = async() =>{
 await fetch("http://localhost/node/projects/strip_payment/stripe-payment/create.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify({ items: { amount: 50000 } }),
  })
  .then((res) => res.json())
  .then((data) => setClientSecret(data.clientSecret));
}
  return (
    <div className="App">
      <button onClick={btnSubmit}>Checkout</button>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}