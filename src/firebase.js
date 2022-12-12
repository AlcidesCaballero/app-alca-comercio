import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7jis6MDQp-hSn4ZFww1R1slXTIg2Cvx0",
    authDomain: "app-alca-comercio.firebaseapp.com",
    projectId: "app-alca-comercio",
    storageBucket: "app-alca-comercio.appspot.com",
    messagingSenderId: "822170363918",
    appId: "1:822170363918:web:e004b7e9f62ab9d974b45f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}
