import React, { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./App.css";
import { withOnlineStatus } from "./common/hoc/withOnlineStatus";

let timeout = null;

const App = ({ isOnline }) => {
  const [currentOnline, setCurrentOnline] = useState(isOnline);

  const showNotificationFn = () => {
    if (isOnline !== currentOnline) {
      NotificationManager.info(isOnline ? "Online" : "Offline");
      setCurrentOnline(isOnline);
    }
  };

  useEffect(() => {
    if (!timeout) {
      showNotificationFn();
      timeout = 1;
      return;
    }
    const time = !currentOnline && isOnline ? 0 : 2000;
    clearTimeout(timeout);
    timeout = setTimeout(() => showNotificationFn(), time);
  }, [isOnline]);

  return (
    <>
      <div className={isOnline ? "online" : "offline"}>
        {isOnline ? "Online" : "Offline"}
        <NotificationContainer />
      </div>
    </>
  );
};

export default withOnlineStatus(App);
