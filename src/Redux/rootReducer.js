import { combineReducers } from "redux";
import { currencyReducer } from "./currencyList/currencyList.reducers";

export default combineReducers({
  currencylist: currencyReducer
});
