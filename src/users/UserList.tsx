import * as React from 'react';
import { Datagrid, EditButton, EmailField, List, ShowButton, TextField } from 'react-admin';

export const UserList: React.FC = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" label="Street" />
            {/*<TextField source="address.city" label="City" />*/}
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" label="Company" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);
