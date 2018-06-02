import {configure, shallow} from "enzyme";
import React from 'react'
import Header from "../Header";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('', () => {
  it('component with class nav should be exist',() => {
    const header = shallow(<Header />)
    expect(header.find('.nav').exists()).toBe(true)
  })

  it('should have 2 route items', ()=> {
    const header = shallow(<Header />)
    expect(header.find('.nav').children().length).toBe(2)
  })

  it ('navigation items should be in class item', () => {
    const header = shallow(<Header />)
    expect(header.find('div.nav').childAt(0).hasClass('item')).toBe(true)
    expect(header.find('div.nav').childAt(1).hasClass('item')).toBe(true)
  })

  it('should be dark bg', () => {
    const header = shallow(<Header bgColor={'#000'}/>)
    expect(header.instance().props.bgColor).toBe('#000')
  })

  it ('render index and page 1 in order', () => {
    const header = shallow(<Header bgColor={'#000'}/>)
    expect(header.find('.nav').childAt(0).text()).toBe('index')
    expect(header.find('.nav').childAt(1).text()).toBe('page1')
  })
})