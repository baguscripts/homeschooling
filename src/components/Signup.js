// import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'


class Signup extends React.Component {

   handleSubmit = e => {
      e.preventDefault();
      const user={
         firstName: this.firstName,
         lastName: this.lastName,
         email: this.email,
         password: this.password
      }
      fetch("http://localhost:8080/api/v1/registration/signup",user).then(
         res => {
            console.log(res);
         }
      ).catch(err =>{
            console.log(err)
         });
      }

   
  render(){
   return (
    <div className='justify-center'>
       <body>
      <div className="wrapper">
         <div className="title-text">
            <div className="title signup">
               Signup Form
            </div>
         </div>
         <div className="form-container">
             <div className="form-inner">
               <form action="#" className="signup" onSubmit={this.handleSubmit}>
               <div className="field">
                     <input type="text" placeholder="FirstName" required
                     onChange={(e)=> this.firstName = e.target.value}
                     />
                  </div>
                  <div className="field">
                     <input type="text" placeholder="LastName" required
                     onChange={(e)=> this.lastName = e.target.value}
                     />
                  </div>
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
                  <div className="field btn1">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Sign Up"/>
                  </div>
                  <div className="signup-link">
                     Already a member?<Link to={"/login"}>
                     Login
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

export default Signup
