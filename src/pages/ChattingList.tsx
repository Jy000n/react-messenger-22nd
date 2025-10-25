import StatusBar from '../components/MenuBar/StatusBar';
import ChattingListHeader from '../components/MenuBar/ChattingListHeader';
import BookmarkChattingList from '../components/ChattingList/BookmarkChattingList';

const ChattingList = () => {
  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div>
          <StatusBar />
          <ChattingListHeader />
          <div>
            <BookmarkChattingList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChattingList;
