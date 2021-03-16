const initialState = {
 upcoming:[],
 isLoading: false
}

export const UpcomingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING" :
            return{
                ...state, isLoading:true
            }
        case "FETCH_UPCOMING":
            return {
                ...state, upcoming:action.payload,
                isLoading:false
            }
        default:
            return state
    }
}
