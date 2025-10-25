import StatusBar from '@/components/MenuBar/StatusBar';
import FriendListHeader from '@/components/MenuBar/FriendListHeader';
import UserTab from '@/components/FriendList/UserTab';
import UpdatedProfileList from '@/components/FriendList/UpdatedProfileList';
import MenuBar from '@/components/MenuBar/CommonLowerMenubar';
import BirthdayProfileList from '@/components/FriendList/BirthdayFriendList';
import ChannelList from '@/components/FriendList/ChannelList';
import BookmarkFriendList from '@/components/FriendList/BookmarkFriendList';
import FriendsList from '@/components/FriendList/FriendsList';

const FriendList = () => {
  return (
    <div className="flex h-full flex-col overflow-auto">
      <div>
        <StatusBar />
        <FriendListHeader />
      </div>
      <div className="flex flex-1 flex-grow overflow-y-auto">
        <div className="w-full flex-col px-[20px] py-[20px]">
          <UserTab />
          <UpdatedProfileList />
          <BirthdayProfileList />
          <ChannelList />
          <BookmarkFriendList />
          <FriendsList />
        </div>
      </div>
      <div className="pb-[20px]">
        <MenuBar />
      </div>
    </div>
  );
};

export default FriendList;
