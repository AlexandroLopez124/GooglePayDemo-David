import React from 'react';
import { View, Button, Alert } from 'react-native';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

function GooglePayButton() {
  const { confirmPlatformPayPayment } = useStripe();

  const pagar = async () => {
    try {
      // 1️⃣ Pedir clientSecret a tu backend
      const response = await fetch('http://10.0.2.2:4242/create-payment-intent', {
        method: 'POST',
      });

      const { clientSecret } = await response.json();

      // 2️⃣ Confirmar con Google Pay
      const { error } = await confirmPlatformPayPayment(clientSecret, {
        googlePay: {
          testEnv: true,
          merchantName: 'Demo Escuela',
          currencyCode: 'MXN',
        },
      });

      if (error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Pago exitoso 🎉');
      }

    } catch (err) {
      Alert.alert('Error', 'Algo salió mal');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pagar con Google Pay" onPress={pagar} />
    </View>
  );
}

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51SzWSc0tjzbjdHMjzCPNPEE08NybHiG0Ime13PnBKOUHZK4DDRGxgGwOSsCGJ5ywt8BWjMzkTjguvLNk3fVAAgUM00gpohlZyT">
      <GooglePayButton />
    </StripeProvider>
  );
}
