import React from 'react'

const CustomButton = ({label = 'SRK Movies', color = 'black', textColor='#fff', fontSize = 23, onClick, isDisabled}) => {
  return (
    <button 
      style={{
        backgroundColor: color,
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        color: textColor,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        fontSize: fontSize,
      }}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

export default CustomButton