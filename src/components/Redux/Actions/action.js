export const addContacts=(item)=>{
    return {type:"ADD_CONTACT",payload:item}
}

export const deleteContacts=(item)=>{
    return {type:"DELETE_CONTACT",payload:item}
}

export const editContacts=(item)=>{
    return {type:"EDIT_CONTACT",payload:item}
}

export const addUser=(item)=>{
    return {type:'ADD_USER' ,payload:item}
}

export const deleteUser=(item)=>{
    return {type:'DELETE_USER' ,payload:item}
}