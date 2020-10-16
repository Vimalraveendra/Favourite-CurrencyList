import React from 'react';
import{shallow} from 'enzyme';
import SelectCurrency from './SelectCurrency'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore();

const props={}

it("should render Select Currency  component  with default props and redux store", () => {
    let wrapper = shallow(
        <Provider store={store}>
        <SelectCurrency {...props}/>
        </Provider>
        );
    expect(wrapper).toMatchSnapshot();
  });