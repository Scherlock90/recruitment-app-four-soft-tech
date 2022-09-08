import React, { memo, FC } from 'react';


import { TApplicationListProps } from './types';

import { Container, SingleApp, Details, KeyName } from './styles';

export const ApplicationList: FC<TApplicationListProps> = memo(({ applicationListData, takeDetailId }) => {
    return (
        <Container>
            {applicationListData.map(({ id, company, name }) =>
                <SingleApp key={id} onClick={takeDetailId.bind(null, id, false)}>
                    <Details><KeyName>Company:</KeyName> {company}</Details>
                    <Details><KeyName>Name:</KeyName> {name}</Details>
                </SingleApp>
            )}
        </Container>
    )
})
