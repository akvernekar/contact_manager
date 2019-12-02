import React from "react"

import {startAddContact} from '../actions/contacts'
import {connect} from 'react-redux'

 class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            mobile:'',
            category:'',
            email:''
        }
    }
        handle=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        submit=(e)=>{
            e.preventDefault()
            const formData=this.state
            this.props.dispatch(startAddContact(formData,this.props))
        }
    
    
    render(){
        return( <div style={{backgroundImage: "url(" + "http://www.mbproflex.com/images/inner_banner/contactus.jpg" + ")", "height":650
    }} class="jumbotron jumbotron-fluid">
        <div className='row'>
            <div className='col-md-2 offset-md-1'>
        <img src='https://gifimage.net/wp-content/uploads/2017/10/contact-gif-9.gif'/>
        </div>
            <div className='col-md-4 offset-md-1'>
                <h3>Add New Contact</h3>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                    <label>name<input className="form-control" type='text' value={this.state.name} name="name" onChange={this.handle}/></label>
                    <br/>
                    <label>email<input className="form-control" type='text' value={this.state.email} name="email" onChange={this.handle}/></label>
                    <br/>
                    <label>mobile<input className="form-control" type='text' value={this.state.mobile} name="mobile" onChange={this.handle}/></label>
                    <br/>
                    category -<input type='radio' value='work' name="category" onChange={this.handle}  defaultChecked />work
                    <input type='radio' value='home' name="category" onChange={this.handle}/>home
                    <br/>
                    <button className="btn btn-success" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
        </div> )
    }
}

export default connect()(ContactForm)