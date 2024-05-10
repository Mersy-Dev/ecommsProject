import React from 'react'

const CustomInput = (props) => {
  const { type, name, placeholder, className, value, onChange, onBlur } = props;
  return (
    <>
      <div>
        <input type={type} name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} className={`form-control ${className}`} />
      </div>
    </>
  )
}

export default CustomInput