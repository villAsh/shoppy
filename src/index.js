import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//using provider we provide store to our App component which can be used in any component.
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persister = persistStore(store);
root.render(
    <Provider store={store} >
        <PersistGate persistor={persister}>
        <App />
        </PersistGate>

    </Provider>
);

