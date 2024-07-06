import React, { createContext, useEffect, useState } from "react";
import useAuth from '@hooks/useAuth';
import { socket } from "@socket/socket";


const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {

    const { auth } = useAuth();
    const [socketIo, setSocketIo] = useState(null);

    // join the socketIo room
    const joinClinic = (clinicId) => {
        socket.emit('joinClinic', clinicId);
    };

    // useeffect for socketIo
    useEffect(() => {

        // connect only if auth.user is not null
        if (auth?.user?.clinicId) {
            socket.connect();
        }

        socket.on('connect', () => {
            joinClinic(auth?.user?.clinicId);
            setSocketIo(socket);

        });

        socket.on('connect_error', (error) => {
            console.log('connect_error', error);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });

        return () => {

            // clean up socketIo
            setSocketIo(null);
            socket.off('connect');
            socket.off('connect_error');
            socket.off('disconnect');
            socket.disconnect();
        };
    }, [auth]);

    return (
        <SocketContext.Provider value={{ socketIo }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;