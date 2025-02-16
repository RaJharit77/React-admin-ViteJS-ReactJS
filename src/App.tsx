import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { UserCreate } from './users/UserCreate';
import { UserEdit } from './users/UserEdit';
import { UserList } from './users/UserList';
import { UserShow } from './users/UserShow';

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
  </Admin>
);

export default App;
