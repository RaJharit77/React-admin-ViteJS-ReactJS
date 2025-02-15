import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { UserCreate } from './users/UserCreate';
import { UserEdit } from './users/UserEdit';
import { UserShow } from './users/UserShow';
import { UserList } from './users/userList';

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
  </Admin>
);

export default App;
