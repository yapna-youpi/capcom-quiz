import React,{useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { FirebaseContext} from '../firebase'


function Forget(props) {

    const firebase = useContext(FirebaseContext);
    
    const [email, setEmail] = useState("");
    const [btn, setBtn] = useState(false);
    const [succes, setSucces] = useState(null); 
    const [error, setError] = useState(null); 
    
    const HandleSubmit = (e)=>{
        e.preventDefault();
        firebase.passwordReset(email)
        .then(()=>{
            setError(null);
            setSucces(`consulter votre Email ${email} pour changer le mot de passe`);
            setEmail("");

            setTimeout(() => {
                props.history.push('/Login');
            }, 5000);
        }) 
        .catch(error=>{
            setError(error);
            setEmail('');
        })
    }
    const disabled = email === "";


  return (
    <div className="signUpLoginBox">
            <div id="slcontainer" style={{display: 'flex',flexDirection: 'row',width: '100%', padding: '20px'}}>
                <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                        {succes && <span 
                            style={{
                            border:"1px solid green",
                            background:"green",
                            color:"#ffffff"
                        }}
                        >
                            {succes}
                        </span>}

                        {error && <span>{error.message}</span>}

                        <h2>Mot de passe oublié ?</h2>
                        < form onSubmit={HandleSubmit}>
                            <div className="inputBox">
                                <input onChange={e => {setEmail(e.target.value)}}   type="email" value={email} autoComplete="off" required/>
                                <label>email</label>
                            </div>

                            <button className='btn btn-lg' disabled={disabled}>Récuperér</button>
                        </form>
                        <div className="linkcontainer">
                            <Link className="simpleLink" to="/Login">dejà inscrit?  connecter-vous <div className=""></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Forget;