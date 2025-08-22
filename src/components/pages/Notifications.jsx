import React, { useContext, useEffect } from "react";
import { PageWrapper, SectionBox, Title } from "../styledComponents";
import { userInfoContext } from "../../store/userContext";
import {
  NotificationProvider,
  useNotification,
} from "../../store/NotificationContext.jsx";

const NotificationsContent = () => {
  const token = localStorage.getItem("access_token");

  const {
    notifications,
    unreadCount,
    wsConnected,
    fetchNotifications,
    markAsRead,
    markAllAsRead,
    connectWebSocket,
  } = useNotification();

  useEffect(() => {
    if (token) {
      fetchNotifications(token);
      connectWebSocket(token);
    }
    console.log(notifications);
  }, [token, fetchNotifications, connectWebSocket]);

  const handleNotificationClick = (notificationId) => {
    markAsRead(notificationId, token);
  };

  return (
    <PageWrapper>
      <Title>Notifications</Title>
      <SectionBox>
        {notifications &&
          notifications.map((notification) => (
            <div key={notification.id}>
              <h4>{notification.title}</h4>
              <p>{notification.message}</p>
              <button onClick={() => handleNotificationClick(notification.id)}>
                Mark as Read
              </button>
            </div>
          ))}
      </SectionBox>
    </PageWrapper>
  );
};

const Notifications = () => (
  <NotificationProvider>
    <NotificationsContent />
  </NotificationProvider>
);

export default Notifications;
