import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
  apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_APIKEY,
  authDomain: 'basic-clothing-store.firebaseapp.com',
  databaseURL: 'https://basic-clothing-store.firebaseio.com',
  projectId: 'basic-clothing-store',
  storageBucket: 'basic-clothing-store.appspot.com',
  messagingSenderId: process.env.REACT_APP_GOOGLE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_GOOGLE_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_GOOGLE_FIREBASE_MEASUREMENT_ID,
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
