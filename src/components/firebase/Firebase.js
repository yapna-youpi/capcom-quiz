import app from 'firebase/app'

import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyCwkjCqCA7gYcrfIrhLFHbzZySIKEEBLcM",
    authDomain: "capcom-ligue.firebaseapp.com",
    projectId: "capcom-ligue",
    storageBucket: "capcom-ligue.appspot.com",
    messagingSenderId: "922012787317",
    appId: "1:922012787317:web:8c721c3a3e16dbf944ce3c",
    measurementId: "G-KYSLHWBD6N"
  };

class Firebase{
    constructor (){
        app.initializeApp(Config);
        this.auth = app.auth();
    }

    // --inscription
    signupUser =async (email, password) => {
       return await this.auth.createUserWithEmailAndPassword(email, password);
    
    }

    //--connexion
    loginUser =async (email, password) => {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    //--deconnexion
    signOutUser = () => this.auth.signOut();

    //passwordReceipt
    passwordReset = email => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;