import React from "react";
import FavouriteCurrency from "../FavouriteCurrency/FavouriteCurrency";
import './SelectCurrency.scss'
import {connect} from 'react-redux'

const SelectCurrency = ({ favouriteList,isOpen}) => {
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
              isOpen={isOpen}
            />
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ currencylist: { favouriteList,isOpen } }) => ({
  favouriteList,
  isOpen
});

export default connect(mapStateToProps)(SelectCurrency);