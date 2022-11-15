import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAOKaPXwgT9CZ0paOLI6LIUwz_d9Cyquxo',
    authDomain: 'sales-watch-92e59.firebaseapp.com',
    databaseURL: 'https://sales-watch-92e59-default-rtdb.firebaseio.com',
    projectId: 'sales-watch-92e59',
    storageBucket: 'sales-watch-92e59.appspot.com',
    messagingSenderId: '70965756791',
    appId: '1:70965756791:web:b2fd96b7d9f7104ba8d772',
    measurementId: 'G-K538FLK3P2',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore;
const storage = firebase.storage();
const database = firebase.database();

export { firestore, storage, firebaseConfig, database };
export default firebase;
