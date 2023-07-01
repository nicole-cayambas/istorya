import Base from '@/Layouts/Base'
import { Head } from '@inertiajs/react';
import React from 'react'

const Index = ({ result }) => {
    const stories = result.data;
    return (
        <Base>
            <Head title={'Stories'} />
            {JSON.stringify(stories)}
        </Base>
    )
}

export default Index