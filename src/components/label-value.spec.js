import React from 'react'
import { shallow } from 'enzyme'
import LabelValue from './label-value'

const renderLabelValue = (props = {}) => {
  const propsToUser = {
    className: '',
    label: '',
    value: '',
    ...props,
  }

  return shallow(<LabelValue {...propsToUser} />)
}

describe('<LabelValue />', () => {
  it('should render without crashing', () => {
    const wrapper = renderLabelValue()
    expect(wrapper.type()).not.toBeNull()
  })

  it('should render label', () => {
    const label = 'some label'
    const props = {
      label,
    }
    const wrapper = renderLabelValue(props)
    expect(wrapper.text()).toContain(label)
  })

  it('should render value', () => {
    const value = 'some value'
    const props = {
      value,
    }
    const wrapper = renderLabelValue(props)
    expect(wrapper.text()).toContain(value)
  })

  it('should render custom className', () => {
    const className = 'some-class'
    const props = {
      className,
    }
    const wrapper = renderLabelValue(props)
    expect(wrapper.find('[data-test="label-value"]').hasClass(className)).toBe(
      true
    )
  })

  it('should pass custom prop', () => {
    const foo = 'bar'
    const props = {
      foo,
    }
    const wrapper = renderLabelValue(props)
    expect(wrapper.find('[data-test="label-value"]').prop('foo')).toBe(foo)
  })
})
