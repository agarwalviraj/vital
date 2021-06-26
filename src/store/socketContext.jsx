import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("https://hackvital.herokuapp.com", {
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
