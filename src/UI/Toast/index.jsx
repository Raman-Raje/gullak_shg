import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTheme } from 'styled-components';

const ToastContainerNotify = (props) => {

    const { theme } = useTheme();

    console.log(theme);

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={props.autoClose ? props.autoClose : 3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme === 'light' ? 'light' : 'dark'}
        />

    )
}

export default ToastContainerNotify