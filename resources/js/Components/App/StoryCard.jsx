import React from 'react'
import Card from '../Generic/Card'
import { Body, Heading5 } from '../Generic/Typography'
import Flex from '../Generic/Flex'
import { TinyAvatar } from '../Generic/Avatar'
import { Link } from '@inertiajs/react'

const StoryCard = ({ story }) => {
    return (
        <Link href={`stories/${story?.id}`}>
            <Card otherClasses={'h-80'}>
                <Flex otherClasses='flex-col justify-between h-full'>
                    <Flex>
                        <Heading5 otherClasses={'line-clamp-2'}>{story?.title}</Heading5>
                        <Body otherClasses={'line-clamp-5'}>{story?.summary}</Body>
                    </Flex>
                    <Flex otherClasses='flex-row'>
                        <TinyAvatar />
                        <Body otherClasses={'truncate'}>{story?.author?.name}</Body>
                    </Flex>
                </Flex>
            </Card>
        </Link>
    )
}

export default StoryCard