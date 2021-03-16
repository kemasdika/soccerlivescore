export const fetchFinished = () => {
    var currentDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var newDay = day > 9 ? `${day}` : `0${day}`
    var newMonth = month > 9 ? `${month}` : `0${month}`
    const date = `${year}${newMonth}${newDay}`
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING'
            })
            const response = await fetch(`https://client.elevenscore.com/api/football/match/matchfixtures?date=${date}&utc=%2B7`,{
                method:'GET',
                headers: { 'X-Api-Key': '24578cdb-fc01-4794-9bb0-865dd8ac405c' }
            })
            const data = await response.json()
            // console.log(data.result,'<<<<<<<<< data')
            dispatch ({
                type: 'FETCH_FINISHED',
                payload: data.result.slice(0,20)
            })
        } catch (err) {
            console.log('masuk action error')
            console.log(err)
        }
    } 
}

export const fetchDetail = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING'
            })
            const response = await fetch(`https://client.elevenscore.com/api/football/match/matchdetail/${id}`,{
                method:'GET',
                headers: { 'X-Api-Key': '24578cdb-fc01-4794-9bb0-865dd8ac405c' }
            })
            const data = await response.json()
            // console.log(data.result,'<<<<<<<<< data')
            dispatch ({
                type: 'FETCH_DETAIL',
                payload: data
            })
        } catch (err) {
            console.log('masuk action error')
            console.log(err)
        }
    } 
}
