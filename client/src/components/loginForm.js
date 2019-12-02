import React from 'react'
import axios from '../config/axios'
import Swal from 'sweetalert2'
class loginForm extends React.Component{
    constructor(){
        super()
        this.state={
           email:'',
            password:''
           
        }
    }
handleChange=(e)=>{
this.setState({
   [e.target.name]:e.target.value
})
}

handleSubmit=(e)=>{
    e.preventDefault()
    const formData=this.state
    console.log(formData)
    
 
axios.post('/users/login' ,formData)
.then(response=>{
    if(response.data.hasOwnProperty('errors')){
        console.log(response)
        Swal.fire({
                        
            title: 'Oops...',
            text: `${response.data.errors}`,
            
          })
    }else{
        console.log(response.data)
        localStorage.setItem('token1',response.data.token)
        this.props.history.push('/')
        window.location.reload()
    }
   
}).catch(err=>{
 console.log(err)
})


}
    render(){
        return(<div style={{backgroundImage: "url(" + "https://www.bankofbaroda.in/writereaddata/Portal/CMS_Template_Banner/42_1_contact-us.jpg" + ")", "height":650
    }} class="jumbotron jumbotron-fluid">
            <div className='container offset-md-4'>
                <h3>Login</h3>
                <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                


                    <label>Email <input type='email' className="form-control" value={this.state.email} onChange={this.handleChange} name='email' required/></label><br/>

                    <label>Password <input className="form-control" type='password' value={this.state.password} onChange={this.handleChange} name='password' required/></label><br/>

                    

                    <input className="btn btn-primary" type='submit'/>
                    <small className="form-text text-muted">Not registered?<a href='/users/register'>create an account</a></small>
                </form>
                </div>
            </div>
            </div>)
    }
}

export default loginForm