import React from 'react';
import axios from 'axios'
import {Link,Route,BrowserRouter,Switch} from 'react-router-dom'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import loginForm from './components/loginForm'
import ContactList from './components/ContactList'
import ContactForm from './components/contactForm'
import ContactEdit from './components/contactEdit'
import PrivateRoute from './components/privateRoute'


function App() {
  function handleClick(){
    axios.delete('http://localhost:3020/users/logout',{
      headers:{
        'x-auth':localStorage.getItem('token1')
      }
    })
    .then(response=>{
      localStorage.removeItem('token1')
      // window.location.reload()
      window.location.href='/'
    })
  }
  return (
    <BrowserRouter>
    <div >
  <h2>Contact Manager</h2>
  <div className="navbar navbar-expand-lg navbar-light bg-light"> 
  <Link className="navbar" to='/'>home</Link> 
{localStorage.getItem('token1')?
<>
<Link className="navbar" to='/contacts'>contacts</Link> 
<Link className="navbar"  to='#' onClick={handleClick}>logout</Link>
</>:
<>
<Link className="navbar" to='/users/register'>register</Link> 
<Link className="navbar" to='/users/login'>login</Link>
  </>}
  </div>

 <Route path='/' component={Home} exact={true}/>
 <Route path='/users/register' component={RegisterForm}/>
 <Route path='/users/login' component={loginForm}/>
 {/* <Route path='/contacts' component={ContactList} exact={true}/>
 <Route path='/contacts/add' component={ContactForm}/>
 <Route path='/contacts/edit/:id' component={ContactEdit}/> */}
 <Switch>
 <PrivateRoute path='/contacts/edit/:id' component={ContactEdit} />
 <PrivateRoute path='/contacts/add' component={ContactForm} />
<PrivateRoute path='/contacts' component={ContactList} exact={true}/>



</Switch>
    </div>
    </BrowserRouter>
   
  )
}

export default App;
