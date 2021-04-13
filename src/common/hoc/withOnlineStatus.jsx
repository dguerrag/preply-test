import React, { useState } from "react";
import "react-notifications/lib/notifications.css";
import OnlineStatusMock from "../../OnlineStatusMock";

export const withOnlineStatus = (WrappedComponent) => ({ ...rest }) => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <>
      <OnlineStatusMock
        onIsOnlineChange={(isOnline) => setIsOnline(isOnline)}
      />
      <WrappedComponent {...rest} isOnline={isOnline} />
    </>
  );
};
