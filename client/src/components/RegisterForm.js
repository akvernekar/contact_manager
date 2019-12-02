import React from 'react'
import axios from '../config/axios'
import Swal from 'sweetalert2'

class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:'',
            msg:''
           
        }
    }
handleChange=(e)=>{
this.setState({
   [e.target.name]:e.target.value
})
}

handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        username:this.state.username,
        password:this.state.password,
        email:this.state.email}
    console.log(formData)
    
 if(this.state.msg=='valid'){     //this.state.msg=='valid'
     
    axios.post('/users/register' ,formData)
    .then(response=>{
        console.log(response.data)
        if(response.data._id){
            this.props.history.push('/users/login')
        }else{
            Swal.fire({
                title: 'Oops...',
                text: 'User already exist',
              })
        }
       
    }).catch(err=>{
     console.log(err)
    })
 }else{
    Swal.fire({
        title: 'Oops...',
        text: 'password must be valid',
      })
 }


}

test=(e)=> { 
    var res='Must have'; 
    var str = e.target.value
        if(!str.match(/[a-z]/g)){
            res+=' ,Lowercase'
        }
        if(!str.match(/[A-Z]/g)){
            res+=' ,Uppercase'
        }
        if(!str.match(/[0-9]/g)){
            res+=' ,Number'
        }
        if(!str.match(/[^a-zA-Z\d]/g)){
            res+=' ,Special case'
        }
        if(str.length <= 8){
            res+=' ,Minimum length 8'
        }
if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) {
                res = "valid" }
    
   this.setState({msg:res})
} 

    render(){
        return(<div style={{backgroundImage: "url(" + "https://www.bankofbaroda.in/writereaddata/Portal/CMS_Template_Banner/42_1_contact-us.jpg" + ")", "height":650
    }} class="jumbotron jumbotron-fluid">
            <div className='container offset-md-4'>
                <h3>Register</h3>
                <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <label>Username <input className="form-control" type='text' value={this.state.username} onChange={this.handleChange} name='username' required/></label><br/>

                    <label>Email <input className="form-control" type='email' value={this.state.email} onChange={this.handleChange} name='email' required/></label>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>

                    <label>Password <input className="form-control" type='password' value={this.state.password} onChange={this.handleChange} name='password' onInput={this.test} required/></label><span style={this.state.msg=='valid'?{color:'green'}:{color:'red'}}>{this.state.password && this.state.msg}</span><br/>

                    

                    <input className="btn btn-primary" type='submit'/>
                    <small className="form-text text-muted">Already have an account?<a href='/users/login'>Sign in</a></small>
                </form>
                </div>
            </div>
       </div> )
    }
}

export default RegisterForm