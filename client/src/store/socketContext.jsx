import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    // const url = "https://hackvital.herokuapp.com"
    const url = "http://localhost:3003";
    const newSocket = io(url, {
      transports: ["websocket"],
      upgrade: false,
    });
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
