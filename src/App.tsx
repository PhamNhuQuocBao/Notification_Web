import { notification } from "antd";
import "./App.css";
import { useCallback, useEffect } from "react";

function App() {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = useCallback(() => {
    api.open({
      message: "Notification Title",
      description:
        "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
      duration: 0,
    });
  }, [api]);

  useEffect(() => {
    openNotification();
  }, [openNotification]);

  return <>{contextHolder}</>;
}

export default App;
