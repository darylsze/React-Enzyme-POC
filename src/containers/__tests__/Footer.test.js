import React from 'react';
import {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build/index";
import {configure} from "enzyme/build/index";
import Footer from "../Footer";

configure({ adapter: new Adapter() })

describe('footer', ()=>{

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