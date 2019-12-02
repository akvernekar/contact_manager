import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {StartSetContacts,startSingleContact,editContact} from '../actions/contacts'


 class ContactEdit extends React.Component{
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


    componentDidMount=()=>{
        const id=this.props.match.params.id
        
            
this.props.dispatch(startSingleContact(id))
setTimeout(()=>{
this.setState({
            name:this.props.singleContact.name,
        mobile:this.props.singleContact.mobile,
    category:this.props.singleContact.category,
email:this.props.singleContact.email})
},400)
            
        // })
    }



    submit=(e)=>{
        e.preventDefault()
        const id=this.props.match.params.id
        const formData=this.state
    
this.props.dispatch(editContact(id,formData,this.props))

    }


    render(){
        return(
            <div style={{backgroundImage: "url(" + "http://www.mbproflex.com/images/inner_banner/contactus.jpg" + ")", "height":650
    }} class="jumbotron jumbotron-fluid">
        <div className='row'>
            <div className='col-md-2 offset-md-1'>
        <img src='https://gifimage.net/wp-content/uploads/2017/10/contact-gif-9.gif'/>
        </div>
            <div className='col-md-4 offset-md-1'>
                <h3>Edit contact</h3>
                <form onSubmit={this.submit}>
                    <div className='form-group'>

                    
                    <label>name<input className="form-control" type='text' value={this.state.name} name="name" onChange={this.handle}/></label>
                    <br/>
                    <label>email<input className="form-control" type='text' value={this.state.email} name="email" onChange={this.handle}/></label>
                    <br/>
                    <label>mobile<input className="form-control" type='text' value={this.state.mobile} name="mobile" onChange={this.handle}/></label>
                    <br/>
                    category -<input  type='radio' value='work' name="category" onChange={this.handle} checked={this.state.category=='work'} />work
                    <input type='radio' value='home' name="category" onChange={this.handle}
                    checked={this.state.category=="home"}/>home
                    <br/>
                   <button className="btn btn-success" type='submit'>Save</button>
                    </div>
                </form>
            </div>
            </div>
            </div> )
    }
}

const mapStateToProps=(state)=>{
    
    return {singleContact:state.singleContact}
}


export default connect(mapStateToProps)(ContactEdit)