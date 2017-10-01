export function addItem (item){
    return dispatch=> {
        dispatch({
            type:"ADD_ITEM",
            payload:item
        })
    }
}

export function deleteItem (index){
    return dispatch=> {
        dispatch({
            type:"DELETE_ITEM",
            payload:index
        })
    }
}

export function editItem(newValue,keyIndex){
    return dispatch =>{
        dispatch({
            type:"EDIT_ITEM",
            payload:{
                value:newValue,
                index:keyIndex
            }
        })
    }
}

export function logIn (userData){
    return dispatch=>{        
        dispatch({
            type:"LOG_USER",
            payload:userData
        })
    }
}

export function logOut (){
    return dispatch=> {
        dispatch({
            type:"SIGN_OUT_USER"
        })
    }
}