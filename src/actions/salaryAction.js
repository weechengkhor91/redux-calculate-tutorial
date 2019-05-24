import {DECREASE, INCREASE} from "./type";

//action是觸發function 在reducer file
export const salaryIncrease = () => (dispatch) => {
    return(
        dispatch({
            type: INCREASE,
            payload: '',
        })
    )
}

export const salaryDecrease = () => (dispatch) => {
    return (
        dispatch({
            type: DECREASE,
            payload: '',
        })
    )
}


