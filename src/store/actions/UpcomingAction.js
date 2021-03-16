export const fetchUpcoming = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING'
            })
            const response = await fetch(`https://client.elevenscore.com/api/football/match/matchfixtures?date=20210317&utc=%2B7`,{
                method:'GET',
                headers: { 'X-Api-Key': '24578cdb-fc01-4794-9bb0-865dd8ac405c' }
            })
            const data = await response.json()
            // console.log(data.result,'<<<<<<<<< data')
            dispatch ({
                type: 'FETCH_UPCOMING',
                payload: data.result.slice(0,20)
            })
        } catch (err) {
            console.log('masuk action error')
            console.log(err)
        }
    } 
}