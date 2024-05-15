import firebase from 'firebase/app';
import 'firebase/auth';

const medicationService = {
  async getMedications() {
    const userId = firebase.auth().currentUser.uid;
    // Use the userId to retrieve the user's medication list
    const medications = await firebase.firestore().collection(`users/${userId}/medications`).get();
    return medications.docs.map((doc) => doc.data());
  },
};
