// Made by Seth Stitik Following the Chat Engine Tutorial //

// Import React
import { useState } from "react";

// Import CSS
import "./App.css";

// Import components
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

// App component
function App() {
  const [user, setUser] = useState(undefined);

  // If user is not defined, return the AuthPage
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
    
  // If user is defined, return the ChatsPage
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;