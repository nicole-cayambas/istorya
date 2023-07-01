import React from 'react'

const Grid = ({ cols = 4, gap = 4, children }) => {
    return (
        <div className={`grid grid-cols-${cols} gap-${gap}`}>
            {children}
        </div>
    )
}

export default Grid