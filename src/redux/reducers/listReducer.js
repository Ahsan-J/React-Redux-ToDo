var initialState={
    list:[]
}

export default function(state = initialState,action){
    switch(action.type){
        case "ADD_ITEM":
        state.list.push(action.payload);
            return state =  {
                ...state,
                list : [...state.list]
            };
            
        case "DELETE_ITEM":
        state.list.splice(action.payload,1);
        return state =  {
                ...state,
                list : [...state.list]
            };

        case "EDIT_ITEM":
        state.list[action.payload.index] = action.payload.value;
        return state =  {
                ...state,
                list : [...state.list]
            };
        default:
        return state;
    }
}