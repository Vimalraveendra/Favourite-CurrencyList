import React from "react";
 import FavouriteList from '../FavouriteList/FavouriteList'
 import './CurrencyList.scss';


class CurrencyList extends React.Component {
   
  
    render() {
      return (
        <React.Fragment>
          <div>
            <h3 className="title">Favourite Currency List </h3>
          </div>
  
          <FavouriteList />
        </React.Fragment>
      );
    }
  }
  
export default CurrencyList;