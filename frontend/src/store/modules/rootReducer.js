import { combineReducers } from "redux";

import loggedUser from "./loggedUser/reducer";
import connectedUsers from "./connectedUsers/reducer";
import messagesUsers from "./messagesUsers/reducer";

export default combineReducers({
  loggedUser,
  connectedUsers,
  messagesUsers
});
