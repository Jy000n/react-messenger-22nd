// import ChattingRoom from './pages/ChattingRoom';
// import Profile from './pages/Profile';
// import FriendList from './pages/FriendList';
import ChattingList from './pages/ChattingList';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-[812px] w-[375px] rounded-[20px] border-[5px] border-[#815840]">
          {/* <ChattingRoom /> */}
          {/* <Profile /> */}
          {/* <FriendList /> */}
          <ChattingList />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
