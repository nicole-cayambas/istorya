import ReadingCanvas from '@/Components/App/Canvas'
import { Heading6 } from '@/Components/Generic/Typography'
import Base from '@/Layouts/Base'
import ContentBase from '@/Layouts/ContentBase'
import React from 'react'

const Index = ({ auth, story }) => {
    return (
        <Base user={auth?.user}>
            <ContentBase>
                <div className='flex sm:flex-col md:flex-row gap-8 justify-center'>
                    <div id={'details'} className='flex flex-col flex-none w-60'>
                        <Heading6>{story?.author?.name}</Heading6>
                        <p>Author</p>
                        
                        <p className='font-bold mt-6'>Summary:</p>
                        <p className='text-justify'>{story?.summary}</p>
                    </div>

                    <div id={'story'} className='grow max-w-3xl'>
                        <ReadingCanvas story={story} />
                    </div>

                    <div id={'impressions'} className='flex flex-col flex-none w-60'>
                        <p className='font-bold'>Reads: 102</p>
                        <p className='font-bold'>Comments:</p>
                        <p>Love this story so much. Cant wait for book 2!!</p>
                        <p>Could have bee better :|</p>
                        <p>Reminds me of Hemingway</p>
                    </div>
                </div>
            </ContentBase>
        </Base>
    )
}

export default Index