export const INITIAL_STATE = {
  messages: [],
};

export default function messagesUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_MESSAGES_USERS":
      return { ...state, ...action.messagesUsers };

    default:
      return state;
  }
}
