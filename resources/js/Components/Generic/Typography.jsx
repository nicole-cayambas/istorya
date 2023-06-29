import React from 'react'

export const Heading1 = ({ children }) => {
    return (
        <h1 className='text-6xl font-bold'>{children}</h1>
    )
}
export const Heading2 = ({ children }) => {
    return (
        <h2 className='text-5xl font-bold'>{children}</h2>
    )
}
export const Heading3 = ({ children }) => {
    return (
        <h3 className='text-4xl font-bold'>{children}</h3>
    )
}
export const Heading4 = ({ children }) => {
    return (
        <h4 className='text-2xl font-bold'>{children}</h4>
    )
}
export const Heading5 = ({ children, otherClasses }) => {
    return (
        <h5 className={`text-xl font-bold ${otherClasses}`}>{children}</h5>
    )
}
export const Heading6 = ({ children }) => {
    return (
        <h6 className='text-lg font-bold'>{children}</h6>
    )
}
export const Body = ({ children, otherClasses }) => {
    return (
        <p className={`text-base ${otherClasses}`}>{children}</p>
    )
}