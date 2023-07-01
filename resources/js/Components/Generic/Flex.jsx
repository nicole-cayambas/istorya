import React from 'react'

const Flex = ({ children, otherClasses = '' }) => {
    return (
        <div className={`flex flex-wrap gap-4 ${otherClasses}`}>
            {children}
        </div>
    )
}

export const FlexItem = ({children, otherClasses = ''}) => {
    return (
        <div className={`grow ${otherClasses}`}>
            {children}
        </div>
    )
}

export default Flex