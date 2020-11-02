import currencyListActionTypes from "./currencyList.types";
import * as actions from './currencyList.actions'
import fetchMock from 'fetch-mock'
import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';
import {fetchCurrency} from '../../Api/Api'

const mockStore = configureStore([thunkMiddleware])

afterEach(() => {
    // clear all HTTP mocks after each test
    fetchMock.restore();
  });
  

describe('Handle Change', () => {
     it('should create an  action to handleChange', () => {
         const text = "EUR"
         const expectedAction={
            type: currencyListActionTypes.HANDLE_CHANGE,
            payload:text
         }
         expect(actions.handleChange(text)).toEqual(expectedAction)
     });
});

describe('request Currency', () => {
    
   
    it('should handles request currency start API', () => {
        const store = mockStore();
      
        store.dispatch(actions.requestCurrencyRates())
        const action = store.getActions();
        
        const expectedAction={
           type: currencyListActionTypes.REQUEST_RATES_PENDING
           
        }
        expect(action[0]).toEqual(expectedAction)
    });

    it('should handles request currency success API', async() => {
        const expectedActions={
            type: currencyListActionTypes.REQUEST_RATES_SUCCESS,
            payload:[
             {
                 currency: "bat (Tajlandia)",
                 code: "THB",
                 mid: 0.1251
                 },     
         ]     
     
         }
         const mockData=[
            {
                currency: "bat (Tajlandia)",
                code: "THB",
                mid: 0.1251
                },     
        ]  

         expect.assertions(1);
        const store = mockStore({});
        fetchMock.getOnce(fetchCurrency(), mockData); //Route to catch and mockData
        
        return store.dispatch(actions.requestCurrencyRates(mockData));
        const action = store.getActions();
         console.log('act',action)

        
        expect(action).toEqual(expectedAction)
    });

    // it('should handles request currency failure API', () => {
    //     const payload='something went wrong!!!'
    //     const store = mockStore({});
    //     store.dispatch(actions.requestCurrencyFailure(payload));
    //     const action = store.getActions();
    
    //     const expectedAction={
    //        type: currencyListActionTypes.REQUEST_RATES_FAILED,
    //        payload:'something went wrong!!!'
    //     }
    //     expect(action[0]).toEqual(expectedAction)
    // });
    
});


// it("should  handles request robots API success", () => {
//     expect.assertions(1);
//     const expectedActions = {
//       type: REQUEST_ROBOTS_SUCCESS,
//       payload: [
//         {
//           id: 123,
//           name: "john",
//           email: "john@gmail.com"
//         }
//       ]
//     };
  
//     const mockData = [
//       {
//         id: 123,
//         name: "john",
//         email: "john@gmail.com"
//       }
//     ];
//     // // Simulate a successful response
//     // const scope = nock("https://jsonplaceholder.typicode.com/")
//     //   .get("/users") // Route to catch and mock
//     //   .reply(200, mockData); // Mock reponse code and data
//     // const store = mockStore();
//     // // Dispatch action to fetch robots
//     // store.dispatch(actions.requestRobots()).then(() => {
//     //   // return of async actions
  
//     //   const action = store.getActions();
//     //   expect(action).toEqual(expectedActions);
//     //   scope.done();
//     // });
//     const store = mockStore();
//     // Simulate a successful response
//     fetchMock.getOnce("https://jsonplaceholder.typicode.com/users", mockData); //Route to catch and mockData
//     // Dispatch action to fetch robots
//     return store.dispatch(actions.requestRobots()).then(() => {
//       // return of async actions
//       const action = store.getActions();
//       //    test if your store dispatched the expected actions
//       expect(action[1]).toEqual(expectedActions);
//     });
//   });