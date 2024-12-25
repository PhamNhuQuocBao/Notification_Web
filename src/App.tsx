import { notification } from "antd";
import "./App.css";
import { useCallback, useEffect } from "react";

function App() {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = useCallback(() => {
    api.error({
      message: "Cảnh báo",
      description: "Bạn đã bị hack",
      duration: 30,
      placement: "top",
    });
  }, [api]);

  useEffect(() => {
    openNotification();
  }, [openNotification]);

  return <>{contextHolder}</>;
}

export default App;
