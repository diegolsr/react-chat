export const INITIAL_STATE = {
  name: String(),
  image: String(),
};

export default function loggedUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_LOGGED_USER":
      return { ...state, ...action.loggedUser };

    default:
      return state;
  }
}
