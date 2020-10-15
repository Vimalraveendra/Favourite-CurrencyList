import React from 'react';
import { v4 as uuidv4 } from "uuid";
import SelectCurrency from '../SelectCurrency/SelectCurrency'
import './FavouriteList.scss'

const FavouriteList=({currencies,currency,handleChange,addCurrency,removeCurrency})=>{
   
    return(
    <React.Fragment>
    <div className="select-item">
      <select
        className="options"
        name="currency"
        value={currency}
        onChange={handleChange}
      >
        {currencies && currencies.map((currency, index) => (
          <option key={index}>{currency}</option>
        ))}
      </select>
    </div>

    <SelectCurrency />

    <div className="btn-item">
      <button
        type="submit"
        className="btn green"
        onClick={() =>
          addCurrency({
            id: uuidv4(),
            currency: currency
          })
        }
      >
        Add Item
      </button>
      <button
        type="submit"
        className="btn red"
        onClick={removeCurrency}
      >
        Clear Item
      </button>
    </div>
    
    

  </React.Fragment>
    )
}

export default FavouriteList;