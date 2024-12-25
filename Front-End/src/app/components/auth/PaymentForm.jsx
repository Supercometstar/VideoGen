import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from ".";

// Load your Stripe public key
const stripePromise = loadStripe("pk_test_iO0OmHJjHiksR0HjyoUOSMNS0017Q3B9xA");

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;
