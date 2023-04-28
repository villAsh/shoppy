import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    sendPasswordResetEmail,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut  
} from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyDIM0XNtqKBZenE0pqjHNB4fzU_lrErCLI',
	authDomain: 'shoppy-45754.firebaseapp.com',
	projectId: 'shoppy-45754',
	storageBucket: 'shoppy-45754.appspot.com',
	messagingSenderId: '917300883231',
	appId: '1:917300883231:web:ab7d3a2e7d6cfc8aa30a2a'
};

initializeApp(firebaseConfig);

const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
    }