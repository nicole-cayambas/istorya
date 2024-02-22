import React, { useState } from 'react'
import { Heading3 } from '../Generic/Typography'
import ArrowIcon from '../Generic/ArrowIcon';
import IconButton from '../Generic/IconButton';

const ReadingCanvas = ({ story }) => {
  const {currentChapter, setCurrentChapter} = useState(0);
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
      <div className='flex justify-between'>
      <IconButton tooltip='Previous Chapter' action={() => console.log('asdfasdf')} icon={<ArrowIcon direction='left' />}/>
      <IconButton tooltip='Next Chapter' action={() => console.log('asdfasdf')} icon={<ArrowIcon direction='right' />}/>
      </div>
    </div>
  )
}

export default ReadingCanvas