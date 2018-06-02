import React from 'react';
import App from './App';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('', ()=>{

  it('render app correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('header').length).toBe(1)
    expect(wrapper.find('header > img').length).toBe(1)
    expect(wrapper.find('header').children().length).toBe(2)
    expect(wrapper.find('p.App-intro').text()).toBe("To get started, edit src/App.js and save to reload.")
    expect(wrapper.find('.footer')).toHaveLength(1)
  });

})