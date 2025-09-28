import ChattingRoom from './pages/ChattingRoom';
// import Profile from './pages/Profile';
// import FriendList from './pages/FriendList';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <ChattingRoom />
      {/* <Profile /> */}
      {/* <FriendList /> */}
    </ChatProvider>
  );
}

export default App;
