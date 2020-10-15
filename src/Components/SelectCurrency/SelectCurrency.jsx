import React from "react";
import FavouriteCurrency from "../FavouriteCurrency/FavouriteCurrency";
import './SelectCurrency.scss'


const SelectCurrency = ({ favouriteList}) => {
  return (
    <div className="currency-list">
      <ul className="currency-item">
        {favouriteList && favouriteList.map(item => {
          return (
            <FavouriteCurrency
              key={item.id}
              id={item.id}
              currency={item.currency}
              rate={item.rate}
              
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SelectCurrency;