import Pagination from '@/Components/App/Pagination';
import Search from '@/Components/App/Search';
import Table from '@/Components/App/Table';
import Base from '@/Layouts/Base'
import ContentBase from '@/Layouts/ContentBase';
import { Head, useForm } from '@inertiajs/react';
import React from 'react'

const Index = ({ result }) => {
    const { current_page, from, to, last_page, total, next_page_url, prev_page_url, links, search } = result.meta;
    const stories = result.data;
    const { get, data, setData } = useForm({ search: search || '' });
    const submit = (e) => {
        e.preventDefault();
        get(route(route().current()),
            data,
            { preserveState: true })
    }
    return (
        <Base>
            <ContentBase>
                <Head title={'Stories'} />
                <form className='pb-4 flex justify-end' onSubmit={submit}>
                    <Search containerProps={{ width: '350px' }} inputProps={{
                        value: data.search,
                        onChange: (e) => setData('search', e.target.value)
                    }} />
                </form>
                <Table
                    columns={
                        [
                            {
                                key: 'id',
                                name: 'ID'
                            },
                            {
                                key: 'title',
                                name: 'Title'
                            },
                            {
                                key: 'author',
                                name: 'Author',
                                renderCell: (params) => params.row?.author?.name
                            },
                        ]
                    }
                    rows={stories}
                    height={'75vh'}
                />
                <Pagination
                    current_page={current_page}
                    from={from}
                    to={to}
                    last_page={last_page}
                    total={total}
                    next_page_url={next_page_url}
                    prev_page_url={prev_page_url}
                    links={links}
                />
            </ContentBase>
        </Base>
    )
}

export default Index