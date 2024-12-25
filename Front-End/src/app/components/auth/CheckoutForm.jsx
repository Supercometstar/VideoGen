// CheckoutForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // Validate Canadian postal code (e.g., A1A 1A1 or A1A1A1)
  const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    // Normalize the postal code by removing spaces
    const normalizedPostalCode = postalCode.replace(/\s+/g, '').toUpperCase();

    // Ensure the postal code is 6 characters long (Canadian format)
    if (!postalCodeRegex.test(normalizedPostalCode)) {
      alert("Please enter a valid Canadian postal code.");
      setLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name,
        email,
        address: {
          line1: address,
          city: city,
          country: country,
          postal_code: normalizedPostalCode, // Send the normalized postal code
        },
      },
    });

    if (error) {
      console.error(error);
      alert(error.message);
      setLoading(false);
    } else {
      console.log("PaymentMethod", paymentMethod);
      // Send `paymentMethod.id` to your server to complete the payment
      alert("Payment successful!");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Postal Code (Canadian)</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
          placeholder="A1A 1A1"
          maxLength="7" // Canadian postal codes can be up to 7 characters (including space)
        />
      </div>

      <div>
        <label>Card Information</label>
        <CardElement options={{
          hidePostalCode: false, // Make sure postal code is shown
        }} />
      </div>

      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;
