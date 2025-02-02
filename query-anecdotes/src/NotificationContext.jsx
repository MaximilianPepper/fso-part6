import { createContext, useReducer } from "react";

const notificationReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "SET":
      return action.payload;
    case "RESET":
      return null;
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    null
  );

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
