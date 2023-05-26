import { Provider } from 'react-redux';
import { store } from './store/store';
import UserManagement from './UserManagement';
import React from 'react'

export default function B17TH3() {

    return (
        <Provider store={store}>
            <UserManagement />
        </Provider>
    )
}