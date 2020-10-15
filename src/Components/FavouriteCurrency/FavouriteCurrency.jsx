import React from 'react';
import PopupModal from '../PopupModal/PopupModal';
import { popupWindow } from "../../Redux/currencyList/currencyList.actions";
import { connect } from "react-redux";

const FavouriteCurrency = ({id,currency,rate,isOpen,popupWindow})=>{
    return (
        <React.Fragment>
          <li className="item" key={id}>
            <span className="left-push">{currency}</span>
            <span className="right-push">{rate}</span>
            <span className="remove-item" onClick={()=>popupWindow(id)}>
              {" "}
              &#10060;
            </span>
            {
                isOpen?(
                <PopupModal />
                ):null
              }
          </li>
          
        </React.Fragment>
      );
    };

    const mapDispatchToProps = dispatch => ({
        popupWindow:(id)=>dispatch(popupWindow(id))
      });

      export default connect(null, mapDispatchToProps)(FavouriteCurrency);