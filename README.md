📱 Google Pay Demo – React Native + Stripe

Proyecto de demostración de integración de Google Pay usando:

React Native CLI

Stripe React Native SDK

Backend con Node.js + Express

PaymentIntent con Stripe (modo test)

🚀 Requisitos

Antes de ejecutar el proyecto, asegúrese de tener instalado:

Node.js (v18 o superior)

npm

Android Studio

Android SDK

Un emulador Android con Google Play
o

Un dispositivo Android físico compatible con Google Pay

📦 Instalación
1️⃣ Clonar repositorio
git clone https://github.com/AlexandroLopez124/GooglePayDemo-David.git
cd GooglePayDemo-David

2️⃣ Instalar dependencias del frontend
npm install

3️⃣ Instalar dependencias del backend
cd backend
npm install express stripe cors
cd ..

🔧 Configuración
Stripe Keys

En el backend (backend/server.js) debe colocarse una clave secreta de Stripe en modo test:

const stripe = require('stripe')('sk_test_TU_CLAVE_AQUI');


En el frontend (App.tsx) debe colocarse la clave pública:



▶️ Ejecutar el Backend

Desde la carpeta backend:

cd backend
node server.js


El servidor se ejecutará en:

http://localhost:4242

▶️ Ejecutar la Aplicación

Desde la carpeta raíz:

npx react-native run-android

📱 Notas sobre Google Pay

⚠️ Google Pay solo funciona si:

El dispositivo tiene NFC

Google Wallet está instalado

Existe una tarjeta agregada

El país está soportado

El dispositivo es físico (no todos los emuladores lo soportan)

Si se ejecuta en un emulador sin Google Pay configurado, se mostrará el mensaje:

Google Pay is not available on this device.


Esto es esperado y no representa error en el código.

💳 Flujo de Pago

El frontend solicita un PaymentIntent al backend.

El backend crea el PaymentIntent en Stripe.

El frontend recibe el clientSecret.

Se confirma el pago mediante confirmPlatformPayPayment.

Google Pay procesa el pago.

📂 Estructura del Proyecto
GooglePayTest/
│
├── backend/
│   └── server.js
│
├── android/
├── ios/
├── App.tsx
└── package.json

🛠 Tecnologías Usadas

React Native

@stripe/stripe-react-native

Node.js

Express

Stripe API