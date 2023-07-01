import ReadingCanvas from '@/Components/App/Canvas'
import Base from '@/Layouts/Base'
import ContentBase from '@/Layouts/ContentBase'
import React from 'react'

const Index = ({ story }) => {
    return (
        <Base>
            <ContentBase>
                <ReadingCanvas story={story} />
            </ContentBase>
        </Base>
    )
}

export default Index