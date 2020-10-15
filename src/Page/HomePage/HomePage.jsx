import React from "react";
import CurrencyList from '../../Components/CurrencyList/CurrencyList'
import './Homepage.scss'

const HomePage = () => {
  return (
    <div className="homepage">
      <CurrencyList />
    </div>
  );
};

export default HomePage;