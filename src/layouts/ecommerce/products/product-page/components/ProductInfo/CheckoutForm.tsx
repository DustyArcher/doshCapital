import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./createPayment";
import MDButton from "components/MDButton";

// components
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const PaymentForm = ({ product, oldprice, quantity, color, material }: any) => {
  const stripe = useStripe();
  const elements = useElements();

  const [open, setOpen] = useState<boolean>(false);

  let price = oldprice * quantity * 100;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = async () => {
    // Get the PaymentIntent client secret from your server or set it on the client-side
    // const clientSecret = 'YOUR_CLIENT_SECRET';
    if (!stripe) {
      // Stripe.js has not loaded yet, so do nothing.
      return;
    }
    const cardElement = elements.getElement(CardElement);

    let description = "Your custom order is here.";

    const clientSecret = await createPaymentIntent(price, description);
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        // type: 'card',
        card: cardElement, // Replace with the actual CardElement
        billing_details: {
          name: "John Doe",
          address: {
            line1: "123 Main St",
            city: "New York",
            state: "NY",
            postal_code: "10001",
            country: "US",
          },
        },
      },
    });

    if (error) {
      console.error(error);
      // Handle error: Show error to the user
    } else {
      // Payment succeeded, handle success
      console.log("success");
      setOpen(false);
      alert("payment is successfull");
    }
  };

  return (
    <div>
      {/* Your other form fields (e.g., name, address) */}
      {/* Payment Sheet trigger */}

      {/* <button onClick={handlePayment}>Pay with Stripe</button> */}
      <MDButton onClick={handleClickOpen} variant="gradient" color="info" fullWidth>
        pay now
      </MDButton>

      {/* modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent style={{ maxWidth: "800px", width: "100%" }}>
          <DialogContentText id="alert-dialog-description">
            <CardElement
              options={{
                hidePostalCode: true,
                // hideCVC: true,
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <div style={{ color: "black", marginTop: "20px" }}>
              <p>Name: {product}</p>
              <p>Price: {price}</p>
              <p>Color: {color}</p>
              <p>Material: {material}</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePayment} autoFocus>
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaymentForm;
