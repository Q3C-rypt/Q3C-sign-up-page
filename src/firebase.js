import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHeGsriJ_nznbM7lkYWUHVOfuF_P4y_Zg",
    authDomain: "email-sing-up.firebaseapp.com",
    projectId: "email-sing-up",
    storageBucket: "email-sing-up.appspot.com",
    messagingSenderId: "225190041146",
    appId: "1:225190041146:web:28093a7fa85502a0c94703"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dataBase = firebaseApp.firestore();

export default dataBase;
