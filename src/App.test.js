import React from 'react';
import App from './App';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import Footer from "../containers/Footer";

configure({ adapter: new Adapter() })

describe('', ()=>{

  it('render layout correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('header').length).toBe(1)
    expect(wrapper.find('header > img').length).toBe(1)
    expect(wrapper.find('header').children().length).toBe(2)
    expect(wrapper.find('p.App-intro').text()).toBe("To get started, edit src/App.js and save to reload.")
  });

  it ('render footer correctly', () => {
    const footer = shallow(<Footer />)
    expect(footer.find('ul').children()).toHaveLength(0)
    console.log('no ul chilren found')
    const mockItems = ['a', 'b', 'c']
    footer.setState({items:mockItems});
    expect(footer.find('ul').children().length).toBe(mockItems.length)
    console.log('got 3 children')
  })
})