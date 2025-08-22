import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import httpServices from "../services/httpServices";
import config from "../config.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [wsConnected, setWsConnected] = useState(false);
  const [socket, setSocket] = useState(null);

  const fetchNotifications = useCallback(async () => {
    try {
      const response = await httpServices.header.get(
        `${config.apiUrl}/notifications/`
      );
      setNotifications(response.data);
      setUnreadCount(response.data.filter((n) => !n.is_read).length);
    } catch (error) {
      console.log(error, "fetching notifications");
    }
  }, []);

  const markAsRead = useCallback(async (notificationId) => {
    try {
      const response = await httpServices.header.post(
        `${config.apiUrl}notifications/${notificationId}/mark-as-read/`,
        (data = {})
      );
      setNotifications((prev) =>
        prev.map((n) => (n.id === notificationId ? { ...n, is_read: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.log(error, "failed to mark notification as read");
    }
  }, []);

  const markAllAsRead = useCallback(async () => {
    try {
      const response = await httpServices.header.get(
        `${config.apiUrl}notifications/`
      );
      setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
      setUnreadCount(0);
    } catch (error) {
      console.log(error, "failed ro mark all as read");
    }
  }, []);

  const connectWebSocket = useCallback(
    (token) => {
      if (socket) return;
      const wsUrl = `ws://127.0.0.1:8000/ws/notifications/`;
      const newSocket = new WebSocket(wsUrl);

      newSocket.onopen = () => {
        setWsConnected(true);
      };

      newSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setNotifications((prev) => [data, ...prev]);
        setUnreadCount(data.unread_count);

        //show toast
        toast.info(data.message, {
          position: "bottom-right",
          autoClose: 5000,
          onClick: () => markAsRead(data.id, token),
        });
      };
      newSocket.onclose = () => {
        setWsConnected(false);

        //attempted reconnect after 3 seconds
        setTimeout(() => connectWebSocket(token), 30000);
      };
      newSocket.onerror = (error) => {
        console.error("websocket error:", error);
      };
      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    },
    [socket, markAsRead]
  );

  useEffect(() => {
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);
  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        wsConnected,
        fetchNotifications,
        markAsRead,
        markAllAsRead,
        connectWebSocket,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
