import app from 'firebase/app'
import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyCFJGN-OtIWdliA-m77EPiuzAYF2hXBudc",
    authDomain: "appli-capcom.firebaseapp.com",
    projectId: "appli-capcom",
    storageBucket: "appli-capcom.appspot.com",
    messagingSenderId: "472608260451",
    appId: "1:472608260451:web:2fc4d87d601eb0915a5356"
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