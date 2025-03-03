import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import DayUseRoom from '@/components/day-use-room';
const DayUseRoomPage = () => {
    return (
        <>
            <MetaData pageTitle="Index">
                <Wrapper>
                    <main>
                       <DayUseRoom/>
                    </main>
                </Wrapper>
            </MetaData>
        </>
    );
};

export default DayUseRoomPage;