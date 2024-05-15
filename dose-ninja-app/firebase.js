import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  projectId: '<YOUR_PROJECT_ID>',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
