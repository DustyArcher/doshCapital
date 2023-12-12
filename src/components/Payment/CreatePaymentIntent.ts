import { STRIP_SK } from "config/config";
import  Stripe  from "stripe";

// const stripe = new Stripe("sk_test_51NFZaOLLDUmTZxUmmoNiB3NuGqC7qEXJXjHuwTAeboCeaYihKfwQXZQfJUMFHjDigF9pbV4dL05r4PoobuW6ATJR00GmJMXrQ8", {
//     apiVersion: "2022-11-15", // Ensure you set the API version you're using
// });
const stripe = new Stripe(STRIP_SK, {
    apiVersion: "2022-11-15", // Ensure you set the API version you're using
});

const CreatePaymentIntent = async (amountInCents: number, description: string): Promise<string> => {
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
  } catch (error:any) {
    console.error(error);
    throw new Error("Failed to create PaymentIntent " + error?.message);
  }
};

export { CreatePaymentIntent };
