const initialState=[]

const contactReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'LIST_CONTACTS':{
            return action.payload
        }
        case 'REMOVE_CONTACT':{
            return [...state].filter(item=>item._id!=action.payload._id)
        }
        case 'SEARCH':{
            return action.payload
        }
        case'ADD_CONTACT':{
            return [...state].concat(action.payload)
        }
        case 'EDIT':{
            return [...state].map(item=>{
                if(item._id==action.payload._id){
                    return action.payload
                }else{
                    return item
                }
            })
        }
        default:{
            return state
        }
    }
}

export default contactReducer