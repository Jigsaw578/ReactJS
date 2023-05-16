import userReducer from './StudentSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})

function B16TH2() {
    return (
        <Provider store={store}>
            <div className="App">
                <InputComponent />
                <DisplayComponent />
            </div>
        </Provider>

    );
}

export default B16TH2;