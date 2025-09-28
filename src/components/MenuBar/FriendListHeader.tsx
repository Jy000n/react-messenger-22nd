import Search from '@/assets/svgs/menubar/upper-menubar/search.svg';
import AddFriend from '@/assets/svgs/menubar/upper-menubar/add-friend.svg';
import Music from '@/assets/svgs/menubar/upper-menubar/music.svg';
import Settings from '@/assets/svgs/menubar/upper-menubar/settings-black.svg';

const FriendListHeader = () => {
  return (
    <div className="mt-[-5px] flex items-center justify-between px-[20px]">
      <div className="text-[20px] font-semibold">친구</div>
      <div className="flex gap-[12px]">
        <img src={Search} alt="검색" className="h-[24px] w-[24px] cursor-pointer" />
        <img src={AddFriend} alt="친구추가" className="h-[24px] w-[24px] cursor-pointer" />
        <img src={Music} alt="음악" className="h-[24px] w-[24px] cursor-pointer" />
        <img src={Settings} alt="설정" className="h-[24px] w-[24px] cursor-pointer" />
      </div>
    </div>
  );
};

export default FriendListHeader;
