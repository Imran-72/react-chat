import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCvOCzuSczfsGZbrEJiEdfLXnQdUqw9_1w',
  authDomain: 'react-chat-b1f10.firebaseapp.com',
  projectId: 'react-chat-b1f10',
  storageBucket: 'react-chat-b1f10.appspot.com',
  messagingSenderId: '899882588355',
  appId: '1:899882588355:web:74244bf99f66406e48aa76',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
