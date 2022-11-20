import User from "./User";
import Post from "./Post";

function App() {
  return (
    <div>
      <User urlEnd="/users" />
      <Post urlEnd="/posts" />
    </div>
  );
}

export default App;
