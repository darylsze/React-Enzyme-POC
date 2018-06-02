import React from 'react';
import App from './App';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import Footer from "./containers/Footer";
import LoadButton from "./components/LoadButton";

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

  it ('render footer correctly', () => {
    const footer = shallow(<Footer />)
    expect(footer.find('ul').children()).toHaveLength(0)
    console.log('no ul chilren found')
    const mockItems = ['a', 'b', 'c']
    footer.setState({items:mockItems});
    expect(footer.find('ul').children().length).toBe(mockItems.length)
    console.log('got 3 children')
  })

  describe('load button', () => {

    it('render load footer item button',() => {
      const btn = shallow(<LoadButton />)
      expect(btn.find('button').text()).toBe('load more')
    })

    it('have on click handler', () => {
      const btn = shallow(<LoadButton />)
      const mockClickHandler = jest.fn()
      btn.setProps({
        onClickHandler: mockClickHandler
      })
      btn.simulate('click')
      expect(mockClickHandler).toHaveBeenCalled()
    })

  })

})