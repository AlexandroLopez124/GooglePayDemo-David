const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
app.use(cors());
app.use(express.json());

const stripe = Stripe('sk_test_51SzWSc0tjzbjdHMjtBGH5wuW6KnVxmexuXMgIvaZAu2JlQY34GUmBeYyIOFi9iP43jcbEgt4rwNwm5Aa03JJcmPn00CwQvp6Yb');

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // 50.00 MXN
      currency: 'mxn',
      automatic_payment_methods: { enabled: true },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => {
  console.log('Servidor corriendo en puerto 4242');
});
