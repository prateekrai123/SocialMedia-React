import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPfcz9KVqP9BG0xWZXKpQGq_dFGonfxeI',
  authDomain: 'socialmedia-64723.firebaseapp.com',
  projectId: 'socialmedia-64723',
  storageBucket: 'socialmedia-64723.appspot.com',
  messagingSenderId: '746985376744',
  appId: '1:746985376744:web:4f2e80e1c1c0377793b25d',
  measurementId: 'G-K9LS3FYPNB',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
