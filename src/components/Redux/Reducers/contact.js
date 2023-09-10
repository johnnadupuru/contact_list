const initialContacts={
    contacts:[{id:1,name:"Janardhana",number:"8500490186"},]
};

export const contactsReducer=(state=initialContacts,action)=>{
    switch (action.type) {
        case "ADD_CONTACT":
            let newId;
            if (state.contacts.length===0){
                newId=1
            }else{
                newId=state.contacts[state.contacts.length-1].id+1
            }
            let newContact={id:newId,...action.payload}
            state.contacts.push(newContact);
            return state
        case "EDIT_CONTACT":
            let index=state.contacts.findIndex(item=>item.id===action.payload.id)
            state.contacts[index]=action.payload
            return state
        case "DELETE_CONTACT":
            let newList=state.contacts.filter(item=>item.id!==action.payload)
            
            return {...state,contacts:newList}
        default:
            return state;
    }
}

