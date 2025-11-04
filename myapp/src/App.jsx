import GreenImg from './assets/Subtract.png'
import './App.css'
function QuotePart(){
   return(
    <div className='Greenpart'>
        <h1 className='quote'>Start Your <br></br>Journey 
            <br></br>with Us</h1>
        <img src={GreenImg}></img>

        
    </div>
);
}
function FormPart(){
    return(
        <div className='formdiv'>
            <h1>Welcome Back</h1>
            <p className='parspecs'>Sign in to your account</p>
        <form  className='formspecs'>
             <label>Email: <br></br>
             <input type="text" placeholder='please enter your email' />
                </label>
             <label>Password: <br></br>
             <input type="text" placeholder='please enter your password' />
                </label>
                <input type="submit" className='submitspecs' />

          <div className='ordiv'>
            <div></div>
             <p>Or</p>
            <div></div>
     
          </div>
          <button className='googlespecs'>Sign in with Google</button>
          </form>
        </div>
    )
}

function RunApp(){
    return(
        <div className='maindiv'>
            {QuotePart()}
            {FormPart()}
            
        </div>
    )
}
export default RunApp;