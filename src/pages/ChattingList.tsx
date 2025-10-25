import StatusBar from '../components/MenuBar/StatusBar';
import ChattingListHeader from '../components/MenuBar/ChattingListHeader';
import BookmarkChattingList from '../components/ChattingList/BookmarkChattingList';
import GeneralChatting from '../components/ChattingList/GeneralChatting';

const ChattingList = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div>
          <StatusBar />
          <ChattingListHeader />
          <div>
            <BookmarkChattingList />
            <GeneralChatting />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChattingList;
