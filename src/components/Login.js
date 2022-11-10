import React from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'

class Login extends React.Component {
   handleSubmit = e => {
      e.preventDefault();
      const user={
         email: this.email,
         password: this.password
      }
      fetch("http://localhost:8080/login",user).then(
         res => {
            console.log(res);
         }
      ).catch(err =>{
            console.log(err)
         });
   }
   render(){
  return (
      <div>
       <body>
      <div className="wrapper">
         <div className="title-text">
            <div className="title login">
               Login Form
            </div>
         </div>
         <div className="form-container">
            <div className="form-inner">
               <form action="#" className="login" onSubmit={this.handleSubmit}>
                  <div className="field">
                     <input type="text" placeholder="Email Address" required
                     onChange={(e)=> this.email = e.target.value}
                     />
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Password" required
                     onChange={(e)=> this.password = e.target.value}
                     />
                  </div>
                  <div className="pass-link">
                  <Link to={"/Signup"}>
                     Forgot password?
                    </Link>
                  </div>
                  <div className="field btn1">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Login"/>
                  </div>
                  <div className="signup-link">
                    Not a member?<Link to={"/Signup"}>
                     Signup now
                    </Link>
                     
                  </div>
               </form>
               
            </div>
         </div>
      </div>
      
   </body>
    </div>
  )}
}

export default Login