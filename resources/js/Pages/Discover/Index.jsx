import StoryCard from '@/Components/App/StoryCard';
import Flex, { FlexItem } from '@/Components/Generic/Flex';
import { Heading4 } from '@/Components/Generic/Typography';
import Base from '@/Layouts/Base';
import ContentBase from '@/Layouts/ContentBase';
import { Head } from '@inertiajs/react';
import React from 'react'

const sections = [
    {
        id: 'featured',
        label: 'Featured',
        data_index: 'featured_stories'
    },
    {
        id: 'trending',
        label: 'Trending',
        data_index: 'trending_stories'
    },
];

const Index = (props) => {
    return (
        <Base
            user={props?.auth?.user}
            permissions={props?.permissions}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Discover</h2>}
        >
            <Head title="Discover" />
            <div>
                <ContentBase>
                    {
                        sections.map(section => (
                            <DiscoverSection key={section.id} section={section} stories={props[section.data_index]} />
                        ))
                    }
                </ContentBase>
            </div>
        </Base>
    )
}

const DiscoverSection = ({ section, stories }) => {
    return <section id={section.id}>
        <Heading4>{section.label}</Heading4>
        <StoriesList stories={stories} />
    </section>
}

const StoriesList = ({ stories }) => {
    return (
        <Flex>
            {
                stories?.map((story, i) => {
                    return (
                        <FlexItem key={i} otherClasses='w-56'>
                            <StoryCard story={story} />
                        </FlexItem>
                    );
                })
            }
        </Flex>
    )
}

export default Index