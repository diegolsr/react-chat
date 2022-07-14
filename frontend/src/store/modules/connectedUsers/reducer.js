export const INITIAL_STATE = {};

export default function connectedUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CONNECTED_USERS":
      return { ...state, ...action.connectedUsers };

    default:
      return state;
  }
}
