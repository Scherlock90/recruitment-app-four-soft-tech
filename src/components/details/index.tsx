import React, { FC, memo } from 'react';

import { TDetailsProps } from './types';

import { AdminDetail, AdminDetails, Container, Detail, Email, Keys } from './styles';

export const Details: FC<TDetailsProps> = memo(({ details, takeDetailId }) => {

    if (!details) return null

    return (
        <Container>
            <button onClick={takeDetailId.bind(null, details.id, true)}>Refresh details about app</button>
            <Detail>
                <Keys>Company:</Keys> {details.company}
            </Detail>
            <Detail>
                <Keys>App Id:</Keys> {details.id}
            </Detail>
            <Detail>
                <Keys>App logo:</Keys> <img src={details.logo} alt="logo" />
            </Detail>
            <Detail>
                <Keys>Company name:</Keys> {details.name}
            </Detail>
            <Detail>
                <Keys>Active users:</Keys> {details.number_of_active_users}
            </Detail>
            <Detail>
                <Keys>All users:</Keys> {details.number_of_users}
            </Detail>
            <Detail>
                <Keys>Server adress:</Keys> {details.server_address}
            </Detail>
            <AdminDetails>
                <Detail>
                    <Keys>Admin details</Keys>
                </Detail>
                <AdminDetail>
                    <Keys>Email:</Keys> <Email href={details.admin.email}>
                        {details.admin.email}
                    </Email>
                </AdminDetail>
                <Detail><Keys>Name:</Keys> {`${details.admin.first_name} ${details.admin.last_name}`}</Detail>
            </AdminDetails>
        </Container>
    )
})
