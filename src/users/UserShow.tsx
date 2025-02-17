import * as React from 'react';
import { EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow: React.FC = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" label="Street" />
            <TextField source="address.suite" label="Suite" />
            <TextField source="address.city" label="City" />
            <TextField source="address.zipcode" label="Zipcode" />
            <TextField source="address.geo.lat" label="Latitude" />
            <TextField source="address.geo.lng" label="Longitude" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" label="Company" />
            <TextField source="company.catchPhrase" label="Catch Phrase" />
            <TextField source="company.bs" label="Business Strategy" />
        </SimpleShowLayout>
    </Show>
);
