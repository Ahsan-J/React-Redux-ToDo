
var initialUser={
    userName:"",
    password:"",
    auth:false
};

export default function(state = initialUser,action){
    switch (action.type){
        case "LOG_USER":
            return state = {
                ...state,
                userName:action.payload.userName,
                password:action.payload.password,
                auth:true
            };
        case "SIGN_OUT_USER":
            return state = {
                ...state,
                userName:"",
                password:"",
                auth:false
            };
        default:
            return state;
    }
}