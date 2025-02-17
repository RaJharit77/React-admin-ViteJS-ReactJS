import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" label="Street" />
            <TextInput source="address.suite" label="Suite" />
            <TextInput source="address.city" label="City" />
            <TextInput source="address.zipcode" label="Zipcode" />
            <TextInput source="address.geo.lat" label="Latitude" />
            <TextInput source="address.geo.lng" label="Longitude" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" label="Company" />
            <TextInput source="company.catchPhrase" label="Catch Phrase" />
            <TextInput source="company.bs" label="Business Strategy" />
        </SimpleForm>
    </Create>
);
