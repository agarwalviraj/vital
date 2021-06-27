import React, { useState, useEffect } from "react";
import { fetchAlerts, postAlert } from "../utils/api";
export const AlertContext = React.createContext({
  Alerts: [],
  addAlert: (alert) => {},
});

const AlertContextProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const getAlerts = async () => {
    setAlerts(await fetchAlerts());
  };

  const addAlert = async (newAlert) => {
    postAlert(newAlert);
    setAlerts(await fetchAlerts());
  };
  return (
    <AlertContext.Provider value={{ addAlert, getAlerts, alerts }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContextProvider;
