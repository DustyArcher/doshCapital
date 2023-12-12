import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useState} from 'react';
import { CreatePaymentIntent } from './CreatePaymentIntent';
import MDBox from 'components/MDBox';
import { Button, Typography } from '@mui/material';

const PaymentForm = ({amount, userInfo,handleSubmit}:any) => {
    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState(false);
    const [cardError, setCardError] = useState('');




    const handlePayment = async (event:any) => {
        event.preventDefault()
        // Get the PaymentIntent client secret from your server or set it on the client-side
        // const clientSecret = 'YOUR_CLIENT_SECRET';

        setProcessing(true)
        if (!stripe) {
          // Stripe.js has not loaded yet, so do nothing.
          return;
        }
        const cardElement = elements.getElement(CardElement);
    
        let description = "Your custom order is here.";
    
        const clientSecret = await CreatePaymentIntent(Number(amount)*100, description);
        const { error,paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            // type: 'card',
            card: cardElement, // Replace with the actual CardElement
            billing_details: {
              name: `${userInfo?.name}`,
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
          setProcessing(false)
          setCardError(error.message)
          console.log(error);
        } 
       
        else {
          // Payment succeeded, handle success
          handleSubmit()
          setProcessing(false)
          setCardError("")
        }
      };
    return (
           <>
           <MDBox component="form" pb={3} px={3} onSubmit={handlePayment}>
             <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button
                    // className='btn btn-sm mt-4 btn-secondary'
                    sx={{mt:3}}
                    variant="outlined"
                    type="submit"
                    disabled={!stripe  || processing}
                    >
                    Pay
                </Button>
           </MDBox>
          {cardError &&  <Typography color="red">{cardError}</Typography>}
           </>
 
       
    );
};

export default PaymentForm;