import React,{ useState,useContext } from 'react'
import { FirebaseContext } from '../firebase';
import { Link } from 'react-router-dom';

const Signup = (props) => {

    const firebase = useContext(FirebaseContext);
    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    
    const [loginData, setLoginData] = useState(data);
    const [error,setError] = useState('');
    const handleChange = e =>{
        setLoginData({...loginData,[e.target.id]:e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email,password} = loginData;
        // let result = await firebase.signupUser(email,password)
        // console.log("les data", result)
        firebase.signupUser(email,password)
        .then(user => {
            setLoginData({...data});
            props.history.push('/welcome');
             
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const {pseudo,email,password,confirmPassword} = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
    ? <button disabled>Inscription</button> : <button>Inscription</button>

    //--gestion error--
    const errorMessage = error !== '' && <span>{error.message}</span>

    return (
        <div className="signUpLoginBox">
            <div id="slcontainer" style={{display: 'flex',flexDirection: 'row',width: '100%', padding: '20px'}}>
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                    {errorMessage}
                    <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required/>
                                <label htmlFor="pseudo">pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                                <label htmlFor="pseudo">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                                <label htmlFor="password">mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required/>
                                <label htmlFor="password">confirm de passe</label>
                            </div>
                            {btn}
                        </form>
                        <div className="linkcontainer">
                            <Link className="simpleLink" to="/login">Déja inscrit? connectez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
