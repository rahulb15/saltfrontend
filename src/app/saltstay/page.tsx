import SaltStayIndex from '@/components/saltstay';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
const SaltStayPage = () => {
    return (
        <>
            <MetaData pageTitle="Index">
                <Wrapper>
                    <main>
                        <SaltStayIndex />
                    </main>
                </Wrapper>
            </MetaData>
        </>
    );
};

export default SaltStayPage;