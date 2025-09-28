import StatusBar from '@/components/MenuBar/StatusBar';
import FriendListHeader from '@/components/MenuBar/FriendListHeader';
import UserTab from '@/components/FriendList/UserTab';
import MenuBar from '@/components/MenuBar/CommonLowerMenubar';

const FriendList = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <StatusBar />
        <FriendListHeader />
      </div>
      <div className="flex flex-1 flex-grow overflow-y-auto">
        <UserTab />
      </div>
      <div className="pb-[20px]">
        <MenuBar />
      </div>
    </div>
  );
};

export default FriendList;
