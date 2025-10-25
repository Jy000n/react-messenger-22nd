import StatusBar from '../components/MenuBar/StatusBar';
import ChattingListHeader from '../components/MenuBar/ChattingListHeader';
import BookmarkChattingList from '../components/ChattingList/BookmarkChattingList';
import MenuBar from '@/components/MenuBar/CommonLowerMenubar';

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
        <div className="pb-[20px]">
          <MenuBar />
        </div>
      </div>
    </>
  );
};

export default ChattingList;
