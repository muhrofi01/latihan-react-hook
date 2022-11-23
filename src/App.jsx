import User from "./User";
import Post from "./Post";
import { createContext, useState } from "react";
export const UserContext = createContext();
export const PostContext = createContext();

function App() {
  const [userToggle, setUserToggle] = useState(false);
  const [postToggle, setPostToggle] = useState(false);

  console.log("App called");
  // console.log("Toggle:", to);

  const handleUserRequest = (event) => {
    event.preventDefault();
    setUserToggle((prev) => !prev);
  };

  const handlePostRequest = (event) => {
    event.preventDefault();
    setPostToggle((prev) => !prev);
  };

  return (
    <div>
      <UserContext.Provider value={userToggle}>
        <div>
          <button onClick={handleUserRequest}>Show User</button>
        </div>
        <User urlEnd="/users" />
      </UserContext.Provider>
      <PostContext.Provider value={postToggle}>
        <div>
          <button onClick={handlePostRequest}>Show Post</button>
        </div>
        <Post urlEnd="/posts" />
      </PostContext.Provider>
    </div>
  );
}

export default App;
