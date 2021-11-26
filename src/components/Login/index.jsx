import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from '../firebase';
import { Link } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    const firebase = useContext(FirebaseContext);

    useEffect(() => {    
        if ( password.length > 5 && email !== '' ) {
            setBtn(true);
        } else if (btn) {
            setBtn(false);
        }
    }, [password,email,btn]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        firebase.loginUser(email,password)
        .then(() => {
            props.history.push('/welcome');
            setPassword('');
            setEmail('');
        })
        .catch(error =>{
            setError(error);
            setPassword('');
            setEmail('');
        })
    }


    return (
        <div className="signUpLoginBox">
            <div id="slcontainer" style={{display: 'flex',flexDirection: 'row',width: '100%', padding: '20px'}}>
                <div className="formBoxLeftLogin">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                        {error !== '' && <span>{error.message}</span>}

                        <h2>connexion</h2>
                        < form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={e => {setEmail(e.target.value)}}   type="text" value={email} autoComplete="off" required/>
                                <label>email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={e => setPassword(e.target.value)}   type="email" value={password} autoComplete="off" required/>
                                <label >password</label>
                            </div>
                            {btn ? <button>connexion</button> : <button disabled>connexion</button>}
                        </form>
                        <div className="linkcontainer">
                            <Link className="simpleLink" to="/signup">nouveau sur capcom Login!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
