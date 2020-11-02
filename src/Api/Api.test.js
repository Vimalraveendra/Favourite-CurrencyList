import * as API from "./API";
import axios from "axios";

describe("Get FetchCurrency", () => {
  it("should call the fetchCurrency and returns promise ", async () => {
    // setUp mocking the axios.get function to return promise resolve
    axios.get = jest.fn().mockReturnValue(
      Promise.resolve({
        data: [{
            rates:[
                {
                    currency: "bat (Tajlandia)",
                    code: "THB",
                    mid: 0.1251
                    },     
            ]     
        }]
        
      })
     
    );

    const expectedResult = [
        {
            currency: "bat (Tajlandia)",
            code: "THB",
            mid: 0.1251
            },
    ];

    //  calling the mockAxios function
    expect.assertions(2);
    const movies = await API.fetchCurrency();

    //  assertions / expects
    expect(axios.get.mock.calls.length).toBe(1);
    expect(movies).toEqual(expectedResult);
  });

  it("should call the axios and return error promise", async () => {
    //  mocking the axios.get function to return promise rejected
    axios.get = jest.fn().mockReturnValue(
      Promise.reject({
        error: "Something went wrong!!!",
      })
    );
    const expectedOutput = { error: "Something went wrong!!!" };
    //  calling the mockAxios function
    expect.assertions(2);
    const movies = await API.fetchCurrency();

    //  assertions / expects
    expect(axios.get.mock.calls.length).toBe(1);
    expect(movies).toEqual(expectedOutput);
  });
});