import React, { Component } from 'react';
import 'tachyons';
class Register extends Component{
    constructor(){
        super()
        this.state={
            registerName:'',
            registerEmail:'',
            registerPassword:''
        }
    }
    onemailchange=(event) => {
        this.setState({registerEmail:event.target.value})
      }
      onepasswordchange=(event) => {
        this.setState({registerPassword:event.target.value})
      }
      onnamechange=(event) => {
        this.setState({registerName:event.target.value})
      }
      onButtonSubmit =()=>{
        const data={email:this.state.registerEmail,password:this.state.registerPassword,name:this.state.registerName};
        fetch('http://localhost:3000/register', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data =>{
            if(data){
                this.props.loaduser(data);
                this.props.onRouteChange('home');
                console.log("lol");
            }
        })
        
      }
    render()
    {
        // const {onRouteChange}=this.props;
        return(
           
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
               <main className="pa4 black-80">
                 <div className="measure ">
                     <fieldset id="Register" className="ba b--transparent ph0 mh0">
                     <legend className="f1 fw6 ph0 mh0">Register</legend>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
                         <input onChange={this.onnamechange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Name" name="Name"  id="Name" />
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                         <input onChange={this.onemailchange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                     </div>
                     <div className="mv3">
                         <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                         <input onChange={this.onpasswordchange}  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                     </div>
                     <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                     </fieldset>
                     <div>
 
                     <input 
                     onClick={()=> this.onButtonSubmit()}
                     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                     type="submit" 
                     value="Register" />
 
                     </div>
                     <div className="lh-copy mt3">
                     </div>
                 </div>
                 </main>
             </article>
       
     )
    }
};
export default Register;