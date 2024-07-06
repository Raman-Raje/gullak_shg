import React from "react";
import config from '@config/config'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from '@store/store'
import { InterfaceContextAPI } from '@contexts/interfaceContext';

import App from "App";

// fonts
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fonts/icomoon/icomoon.woff'

// analytics
import ReactGA from "react-ga4";
ReactGA.initialize(config.GA_TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <InterfaceContextAPI>
                <App/>
            </InterfaceContextAPI>
        </BrowserRouter>
    </Provider>
);
