import { useState } from 'react';
import FriendList from './pages/FriendList';
import ChattingList from './pages/ChattingList';
import { ChatProvider } from './context/ChatContext';
import CommonLowerMenubar from './components/MenuBar/CommonLowerMenubar';

function App() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [hideLowerMenubar, setHideLowerMenubar] = useState(false);

  // BottomMenubarItems의 메뉴 id 기준 렌더링 페이지 선택
  const renderPage = () => {
    switch (activeMenu) {
      case 0:
        return <FriendList setHideLowerMenubar={setHideLowerMenubar} />;
      case 1:
        return <ChattingList />;
      case 2:
        return <div className="flex h-full items-center justify-center">오픈채팅 페이지</div>;
      case 3:
        return <div className="flex h-full items-center justify-center">쇼핑 페이지</div>;
      default:
        return <div className="flex h-full items-center justify-center">더보기 페이지</div>;
    }
  };
  return (
    <ChatProvider>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex h-[812px] w-[375px] flex-col rounded-[20px] border-[5px] border-[#815840]">
          <div className={`${hideLowerMenubar ? 'flex-1' : 'flex-1 overflow-y-auto'}`}>{renderPage()}</div>
          {!hideLowerMenubar && <CommonLowerMenubar active={activeMenu} setActive={setActiveMenu} />}
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
