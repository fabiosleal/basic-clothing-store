import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDowBIHUyuvczcKQPwDdaXnYJrdxh89cME',
  authDomain: 'basic-clothing-store-db.firebaseapp.com',
  databaseURL: 'https://basic-clothing-store-db.firebaseio.com',
  projectId: 'basic-clothing-store-db',
  storageBucket: 'basic-clothing-store-db.appspot.com',
  messagingSenderId: '1045996080427',
  appId: '1:1045996080427:web:cf2b15afedb3bcd640496e',
  measurementId: 'G-WNT2JQWRYD',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
