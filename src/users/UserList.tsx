import * as React from 'react';
import { Datagrid, EditButton, EmailField, List, ShowButton, TextField } from 'react-admin';

export const UserList: React.FC = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="website" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);
