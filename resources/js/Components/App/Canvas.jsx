import React from 'react'
import { Heading3 } from '../Generic/Typography'

const ReadingCanvas = ({ story }) => {
  return (
    <div className='drop-shadow-lg bg-white rounded-2xl p-8 flex flex-col gap-4 break-words'>
      <Heading3>Chapter</Heading3>
      <p>
        {JSON.stringify(story)}
      </p>
      <p>
        {JSON.stringify(story)}
      </p>
      <p>
        {JSON.stringify(story)}
      </p>
      <p>
        {JSON.stringify(story)}
      </p>
      <p>
        {JSON.stringify(story)}
      </p>
    </div>
  )
}

export default ReadingCanvas