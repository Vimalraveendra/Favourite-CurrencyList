import React from 'react';

const FavouriteCurrency = ({id,currency,rate})=>{
    return (
        <React.Fragment>
          <li className="item" key={id}>
            <span className="left-push">{currency}</span>
            <span className="right-push">{rate}</span>
            <span className="remove-item" >
              {" "}
              &#10060;
            </span>
          </li>
          
        </React.Fragment>
      );
    };


export default FavouriteCurrency;