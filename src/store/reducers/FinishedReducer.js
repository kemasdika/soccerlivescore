const initialState = {
 finished:[],
 detail:[],
 isLoading: false
}

export const FinishedReducer = (state = initialState, action) => {
    // console.log('masuk')
    switch(action.type) {
        case "LOADING" :
            return{
                ...state, isLoading:true
            }
        case "FETCH_FINISHED":
            return {
                ...state, finished:action.payload,
                isLoading:false
            }
        case "FETCH_DETAIL":
        return {
            ...state, detail:action.payload,
            isLoading:false
        }
        default:
            return state
    }
}
