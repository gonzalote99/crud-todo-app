import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCzag8ebQjc5uTNfak9Z5LTXe7v_4Kpfmk",
    authDomain: "sample-8c312.firebaseapp.com",
    projectId: "sample-8c312",
    storageBucket: "sample-8c312.appspot.com",
    messagingSenderId: "661815432833",
    appId: "1:661815432833:web:ce3a8d3a2c54cc0511df80"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
