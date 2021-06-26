import React from 'react';
import Routes from './Routes';
import { SocketProvider } from "../contexts/socketContext";

const Providers = () => {
    return (
        <SocketProvider>
            <Routes />
        </SocketProvider>
    );
}

export default Providers;
