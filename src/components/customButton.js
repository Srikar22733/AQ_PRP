import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({label = 'SRK Movies', color = 'black', textColor='#fff', fontSize = 23, onClick, isDisabled}) => {
  return (
    <Button 
      style={{
        backgroundColor: color,
        padding: '10px 20px',
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
    </Button>
  )
}

export default CustomButton