import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./globalStyles";

import { Chat } from "./pages/Chat";

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Chat />
  </Provider>
);

export default App;
