import currencyListActionTypes from "./currencyList.types";
import {fetchCurrency } from '../../Api/Api'
const requestCurrencyStart=()=>({
  type: currencyListActionTypes.REQUEST_RATES_PENDING 
})

const requestCurrencySuccess = (data)=>({
  type: currencyListActionTypes.REQUEST_RATES_SUCCESS,
  payload: data
})

const requestCurrencyFailure = error=>({
  type: currencyListActionTypes.REQUEST_RATES_FAILED,
        payload: error
})

export const requestCurrencyRates = () => async(dispatch) => {
  dispatch(requestCurrencyStart())
   try{
    const data = await(fetchCurrency())
    dispatch(requestCurrencySuccess(data))
   }
catch(error){
       dispatch(requestCurrencyFailure(error))
     
}
};


export const handleChange = event => ({
  type: currencyListActionTypes.HANDLE_CHANGE,
  payload: event
});

export const addCurrency = item => ({
  type: currencyListActionTypes.ADD_CURRENCY,
  payload: item
});

export const removeCurrency = id => ({
  type: currencyListActionTypes.REMOVE_CURRENCY,
  payload: id
})
 

export const clearCurrency = () => ({
  type: currencyListActionTypes.CLEAR_CURRENCY
});

export const popupWindow= (id)=>({
  type:currencyListActionTypes.HANDLE_POPUP_WINDOW,
  payload:id
})
 

