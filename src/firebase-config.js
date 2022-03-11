import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: 'ltt-ecommerce-shop',
  storageBucket: 'ltt-ecommerce-shop.appspot.com',
  appId: '1:914193338599:web:67cd2ed22ca7275eff9242',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
