import ChattingRoom from './pages/ChattingRoom';
// import Profile from './pages/Profile';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <ChattingRoom />
      {/* <Profile /> */}
    </ChatProvider>
  );
}

export default App;
