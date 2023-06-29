import React from 'react'

const Card = ({children, otherClasses = ''}) => {
  return (
    <div className={`p-6 shadow-lg rounded-lg outline-2 ${otherClasses}`}>
        {children}
    </div>
  )
}

export default Card