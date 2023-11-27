// const stripe = require('stripe')('sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj');

// const createPaymentIntent = async (amountInCents:Number, currency:String) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amountInCents,
//       currency: currency,
//     });

//     return paymentIntent.client_secret;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to create PaymentIntent');
//   }
// };

// module.exports = {createPaymentIntent}

import { Stripe } from "stripe";

const stripe = new Stripe("sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj", {
  apiVersion: "2022-11-15", // Ensure you set the API version you're using
});

const createPaymentIntent = async (amountInCents: number, description: string): Promise<string> => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "USD",
      description,
    });

    if (paymentIntent.client_secret) {
      return paymentIntent.client_secret;
    }

    throw new Error("Client secret is missing");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create PaymentIntent");
  }
};

export { createPaymentIntent };
