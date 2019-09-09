import React from 'react'
import PropTypes from 'prop-types'
import './label-value.css'

const LabelValue = ({ className, label, value, ...props }) => (
  <p className={`label-value ${className}`} data-test="label-value" {...props}>
    <strong>{label}: </strong>
    {value}
  </p>
)

LabelValue.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.number,
    PropTypes.string,
  ]),
}

export default LabelValue
