import React from 'react'

const Link = ({ chilren, to = '' }) => {
    return (
        <a href={to}>{chilren}</a>
    )
}

export default Link