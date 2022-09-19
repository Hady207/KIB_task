import "./App.css";
import { Provider } from "react-redux";
import Appbar from "./components/Appbar";
import { PostList } from "./pages/PostList";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Appbar />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
