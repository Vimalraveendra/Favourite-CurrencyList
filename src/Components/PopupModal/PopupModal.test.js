import React from 'react';
import{shallow} from 'enzyme';
import PopupModal from "./PopupModal"
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore();

const props={}

it("should render PopupModal  component  with default props and redux store", () => {
    let wrapper = shallow(
        <Provider store={store}>
        <PopupModal {...props}/>
        </Provider>
        );
    expect(wrapper).toMatchSnapshot();
  });