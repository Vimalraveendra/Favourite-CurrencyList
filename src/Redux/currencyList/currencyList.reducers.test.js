

import * as reducers from './currencyList.reducers';
import currencyListActionTypes from "./currencyList.types";

describe('currencyReducer', () => {
    const initialState = {
        currencies: [],
        rates: [],
        rate: "",
        currency: "USD",
        favouriteList: [],
        id: "",
        isPending: false,
        error: "",
        result: "",
        isOpen:false
      };
      it('should  return the initial state', () => {
          expect(reducers.currencyReducer(undefined,{})).toEqual(initialState)
      });

      it('should handle the REQUEST_RATES_PENDING  ', () => {

        const mockResult = {
            currencies: [],
            rates: [],
            rate: "",
            currency: "USD",
            favouriteList: [],
            id: "",
            isPending: true,
            error: "",
            result: "",
            isOpen:false
          };
          expect(reducers.currencyReducer(initialState,{
              type:currencyListActionTypes.REQUEST_RATES_PENDING,
          })).toEqual(mockResult)
      });
      
      it('should handle the REQUEST_RATES_FAILED', () => {

        const mockResult = {
            currencies: ["EUR",],
            rates: [],
            rate: "",
            currency: ["EUR",],
            favouriteList: [],
            id: "",
            isPending: true,
            error: "",
            result: "",
            isOpen:false
          };
          expect(reducers.currencyReducer(initialState,{
              type:currencyListActionTypes.REQUEST_RATES_FAILED,
              payload:'Nooooo!!!!'
          
             
          })).toEqual({
            currencies: [],
            rates: [],
            rate: "",
            "currency": "USD",
            favouriteList: [],
            id: "",
            isPending: false,
            error: 'Nooooo!!!!',
            result: "",
            isOpen:false

          })
      });

      it('should handle the REQUEST_RATES_SUCCESS ', () => {

        const mockResult = {
            currencies: [undefined,],
            rates: ["EUR"],
            rate: "",
            currency: "USD",
            favouriteList: [],
            id: "",
            isPending: false,
            error: "",
            result: "",
            isOpen:false
          };
          expect(reducers.currencyReducer(initialState,{
              type:currencyListActionTypes.REQUEST_RATES_SUCCESS,
              payload:["EUR",]
          
             
          })).toEqual(mockResult)
      });
      
    it('should return the  change currency ', () => {
        const mockResult= {
            currencies: [undefined],
            rates: [],
            rate: "",
            currency: ["EUR"],
            favouriteList: [],
            id: '',
            isPending: false,
            error: "",
            result: "",
            isOpen:false
        }
        expect(reducers.currencyReducer(initialState,{ 
            type:currencyListActionTypes.HANDLE_CHANGE,
            payload:['EUR']
        })).toEqual(mockResult )
    });


it('should return the popup window', () => {
    const mockResult= {
        currencies: [undefined],
        rates: [],
        rate: "",
        currency: "USD",
        favouriteList: [],
        id: 2,
        isPending: false,
        error: "",
        result: "",
        isOpen:true
    }
    expect(reducers.currencyReducer(initialState,{ 
        type:currencyListActionTypes.HANDLE_POPUP_WINDOW,
        payload:2
    })).toEqual(mockResult )
});

it('should handle clear currency', () => {
    const mockResult= {
        currencies: [undefined],
        rates: [],
        rate: "",
        currency: "USD",
        favouriteList: [],
        id: '',
        isPending: false,
        error: "",
        result: "",
        isOpen:false
    }
    expect(reducers.currencyReducer(initialState,{ 
        type:currencyListActionTypes.CLEAR_CURRENCY,
        
    })).toEqual(mockResult )
});

it('should handle remove currency', () => {
    const mockResult= {
        currencies: [undefined],
        rates: [],
        rate: "",
        currency: "USD",
        favouriteList: [],
        id: '',
        isPending: false,
        error: "",
        result: "",
        isOpen:false
    }
    expect(reducers.currencyReducer(initialState,{ 
        type:currencyListActionTypes.REMOVE_CURRENCY,
        payload:2
    })).toEqual(mockResult )
});

// it('should handle add currency', () => {
//     const mockResult= {
//         currencies: [],
//         rates: [],
//         rate: "",
//         currency: "USD",
//         favouriteList: [],
//         id: '',
//         isPending: false,
//         error: "",
//         result: "",
//         isOpen:false
//     }
//     expect(reducers.currencyReducer(initialState,{ 
//         type:currencyListActionTypes.ADD_CURRENCY,
//         payload:2
//     })).toEqual(mockResult )
// });

});
