import React from 'react'

import {connect} from 'react-redux'
import {removeContact,searchContact} from '../actions/contacts'

import {Link} from 'react-router-dom'



 class ContactList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }
remove=(id)=>{
        

        this.props.dispatch(removeContact(id))
    }

    search=(e)=>{
      this.setState({search:e.target.value})

    

    this.props.dispatch(searchContact(e.target.value))
    }

    render(){
        
        return(
        
        <div style={{backgroundImage: "url(" + "http://www.mbproflex.com/images/inner_banner/contactus.jpg" + ")", "height":650
    }} class="jumbotron jumbotron-fluid">
        <div className="container">
        <div className='row'>
<div className='col-md-2 '>
 <Link to='/contacts/add'> <button className="btn btn-secondary">Add New Contacts</button>  </Link>
 </div>
<div className='col-md-5 offset-md-3'>
<input className="form-control" style={{"width":300}} value={this.state.search} onChange={this.search} placeholder='search by name/number'/>
</div>
</div>
</div>
            <div className='container'>
           
               <h2>Contacts</h2>
               
            
               <div className='row'>
                
                    {this.props.contacts.map(item=>{
                        return(<div key={item._id}>
                            <div className="col-md-3">
                        <div className='card bg-light mb-3' style={{"width": '18rem'}} >
                            <div className='card-body'>
                                <div className='row'>
                                
                                <div className='col-md-8'>
                      <h3 className="card-title">{item.name} </h3> 
                      <p>{item.category} </p>
                    <p>{item.email}</p>
                        <h4>{item.mobile}</h4> 
                        </div>
                        <div className='col-md-1' >
                                <img style={{"width":80}} src="https://eaushadhijh.dcservices.in/HIS/hisglobal/images/phone.gif" />
                                </div>
                        </div>
                        <button style={{'width':'120px'}}  className="btn btn-danger btn-sm" onClick={()=>this.remove(item._id)}>Delete</button>
                       <Link to={`/contacts/edit/${item._id}`} ><button style={{'width':'120px'}}  className="btn btn-info btn-sm" >edit</button></Link> 
                       </div> 
                       </div>   
                        </div>
                        </div>)
                    })}
                    </div>
                    
               
                  </div>
       </div> )
    }
}
const mapStateToProps=(state)=>{
    return{contacts:state.contacts}
}

export default connect(mapStateToProps)(ContactList)