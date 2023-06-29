import React from 'react'

const Index = ({trending_stories}) => {
    return (
        <div>{JSON.stringify(trending_stories)}</div>
    )
}

export default Index