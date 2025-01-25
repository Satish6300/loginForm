import { useState } from "react";

function Form(){

    const [pressedLogin, setPressedLogin] = useState(false);
    function clicked() {
        setPressedLogin(true);
    }

    return <>
    <div style={{ height: 'auto', width: '50vw', justifyContent: 'center', margin: 'auto'}}>
        <div style={{background: '#6ec485',height: 'auto', width: '500px', justifyContent: 'center', borderRadius: '16px',  margin: 'auto',alignItems: 'center', marginTop: '50px', paddingTop: 20}}>
            <div style={{textAlign: 'center', marginBottom: 16}}>
            <h1>{!pressedLogin ?  'Sign Up' : 'Sign In'}</h1>
            <img class="logo" src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png" alt="logo" height={100} width={100} />
            </div>
            <form style={{ textAlign: 'center'}}>
                {!pressedLogin && <div>
                    <p>Name: </p>
                    <input type="text" id="Fname"></input>
                </div>}
                <div>
                <p>Email: </p>
                <input type="text" id="email"></input><br></br>
                </div>
                <div>
                <p >password: </p>
                <input type="password" id="password"></input>
                </div>
                {!pressedLogin && <div style={{marginBottom: 5}}>
                <p>Confirm password: </p>
                <input type="password" id="conpassword"></input>
                </div>}
                <div>
                    <button >{!pressedLogin ?  'Sign Up' : 'Sign In'}</button>
                </div>
                {!pressedLogin && <p style={{paddingBottom: 16}}>Already have an account? <a href="#" onClick={clicked} >Sign In</a></p>}
            </form>
        </div>
    </div>
    </>
}

export default Form;