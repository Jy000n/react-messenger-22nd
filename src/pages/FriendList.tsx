import StatusBar from '@/components/MenuBar/StatusBar';
import FriendListHeader from '@/components/MenuBar/FriendListHeader';
import UserTab from '@/components/FriendList/UserTab';
import UpdatedProfileList from '@/components/FriendList/UpdatedProfileList';
import MenuBar from '@/components/MenuBar/CommonLowerMenubar';

const FriendList = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <StatusBar />
        <FriendListHeader />
      </div>
      <div className="flex flex-1 flex-grow overflow-y-auto">
        <div className="w-full flex-col px-[20px] py-[20px]">
          <UserTab />
          <UpdatedProfileList />
        </div>
      </div>
      <div className="pb-[20px]">
        <MenuBar />
      </div>
    </div>
  );
};

export default FriendList;
