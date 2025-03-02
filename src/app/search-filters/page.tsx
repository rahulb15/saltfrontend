import SearchFiltersIndex from '@/components/search-filters';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
const SearchFiltersPage = () => {
    return (
        <>
            <MetaData pageTitle="Search Filter">
                <Wrapper>
                    <main>
                        <SearchFiltersIndex />
                    </main>
                </Wrapper>
            </MetaData>
        </>
    );
};

export default SearchFiltersPage;