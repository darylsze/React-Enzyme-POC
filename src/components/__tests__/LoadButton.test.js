import React from 'react';
import {shallow} from "enzyme";
import LoadButton from "../LoadButton";
import Adapter from "enzyme-adapter-react-16/build/index";
import {configure} from "enzyme/build/index";

configure({ adapter: new Adapter() })

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
