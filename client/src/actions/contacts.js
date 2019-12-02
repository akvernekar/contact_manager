import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setContacts=(contacts)=>{
        return {type:'LIST_CONTACTS',
    payload:contacts}
}


export const StartSetContacts=()=>{
    return (dispatch)=>{
        axios.get('/contacts',{
                headers:{
                    'x-auth':localStorage.getItem('token1')
                }
            })
            .then(response=>{
                dispatch(setContacts(response.data))
            })
    }
}



export const remove=(data)=>{
    return {type:'REMOVE_CONTACT',
payload:data}
}

export const removeContact=(id)=>{
    return (dispatch)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios.delete(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token1')
            }
        })
        .then(response=>{
            dispatch(remove(response.data))
        })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        
    }
}

export const Search=(data)=>{
    return {type:'SEARCH',
payload:data}
}

export const searchContact=(value)=>{
    return (dispatch)=>{
        axios.get('/contacts',{
        headers:{
            'x-auth':localStorage.getItem('token1')
        }
    })
    .then(response=>{
       const data=response.data.filter(item=>{
            return (item.name.toLowerCase().slice(0,value.length)==value.toLowerCase() || item.mobile.toString().slice(0,value.length)==value)
        })
    dispatch(Search(data))
    })
    
    }
}

export const addContact=(data)=>{
    return {type:'ADD_CONTACT',
payload:data}
}

export const startAddContact=(formData,props)=>{
  return (dispatch)=>{  axios.post("/contacts", formData,{
                "headers":{
                    "x-auth":localStorage.getItem('token1')
                }
            })
            .then(response=>{
                if(response.data.hasOwnProperty('errors')){
                    console.log(response.data)
                    Swal.fire({
                        
                        title: 'Oops...',
                        text: 'form cannot be empty',
                        
                      })
                }else{
                    console.log(response.data)
                    dispatch(addContact(response.data))
                props.history.push('/contacts')
                }
                
            })
            .catch(err=>{
                console.log(err)
            })}
}

export const singleContact=(data)=>{
return {type:'SINGLE_CONTACT',
payload:data}
}

export const startSingleContact=(id)=>{
    return (dispatch)=>{
        axios.get(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token1')
            }
        })
        .then(response=>{
            console.log(response.data)
            dispatch(singleContact(response.data))
        })
    }
}


export const edit=(data)=>{
    return {type:'EDIT',
payload:data}
}

export const editContact=(id,formData,props)=>{
    return (dispatch)=>{
        axios.put(`/contacts/${id}`, formData,{
            "headers":{
                "x-auth":localStorage.getItem('token1')
            }
        })
        .then(response=>{
            
            if(response.data.hasOwnProperty('errors')){
                console.log(response.data)
                alert(response.data.message)
            }else{
                console.log(response.data)
                dispatch(edit(response.data))
            props.history.push('/contacts')
            }
     })
        .catch(err=>{
            console.log(err)
        })
    }
}