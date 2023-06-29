import StoryCard from '@/Components/App/StoryCard';
import Card from '@/Components/Generic/Card';
import Flex, { FlexItem } from '@/Components/Generic/Flex';
import Grid from '@/Components/Generic/Grid';
import { Heading3, Heading4, Heading5 } from '@/Components/Generic/Typography';
import Base from '@/Layouts/Base';
import ContentBase from '@/Layouts/ContentBase';
import React, { Fragment } from 'react'

const Index = ({ trending_stories, featured_stories, stories }) => {
    return (
        <Base>
            <div>
                <ContentBase>
                    <TrendingStories trending_stories={trending_stories} />
                    <FeaturedStories featured_stories={featured_stories} />
                    <StoriesList stories={stories} />

                </ContentBase>
            </div>
        </Base>
    )
}

const FeaturedStories = ({ featured_stories = [] }) => {
    return <section id={'featured'}>
        <Heading4>Featured</Heading4>
        {
            featured_stories?.map((story, i) => {
                <StoryCard key={i} story={story} />
            })
        }
    </section>
}

const TrendingStories = ({ trending_stories = [] }) => {
    return <section id={'trending'}>
        <Heading4>Trending</Heading4>
        {
            trending_stories?.map((story, i) => {
                <StoryCard key={i} story={story} />
            })
        }
    </section>
}

const StoriesList = ({ stories }) => {
    return (
        <section id={'stories'}>
            <Heading4>Stories</Heading4>
            <Flex>
                {
                    stories?.data?.map((story, i) => {
                        return (
                            <FlexItem key={i} otherClasses='w-56'>
                                <StoryCard story={story} />
                            </FlexItem>
                        );
                    })
                }
            </Flex>
        </section>
    )
}

export default Index