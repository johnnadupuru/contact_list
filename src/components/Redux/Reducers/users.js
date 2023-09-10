const initialUsers={
    users:[{id:1,name:"janardhana",address:"vzm"}]
}

export const usersReducer=(state=initialUsers,action)=>{
    switch (action.type) {
        case "ADD_USER":
            let newID=state.users.length+1
            let newUser={id:newID,...action.payload}
            state.users.push(newUser)
            return state
        case "DELETE_USER":
            let index=state.users.filter(item=>item.id!==action.payload)
            console.log(index)
            return {...state, users:index}
        default:
            return state;
    }
}