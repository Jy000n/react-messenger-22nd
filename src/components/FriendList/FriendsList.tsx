import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import friendData from '@/data/friendsData.json';

const FriendsList = () => {
  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-[13px] pb-[20px]">
        <div className="flex justify-between">
          <div className="mb-[10px] text-[14px] font-medium">친구 {friendData.length}</div>
          <img src={DropDown} alt="드롭다운" className="h-[20px] w-[20px] rotate-180 cursor-pointer" />
        </div>

        {friendData.map((friend) => (
          <div key={friend.userId} className="flex py-[8px]">
            <div className="mr-[12.44px] h-[42px]">
              <img
                src={friend.profileImage || ProfileIMGDefault}
                alt="{friend.name}"
                className="h-[42px] w-[42px] cursor-pointer"
              />
            </div>
            <div className="flex cursor-pointer flex-col justify-center">
              <div className="text-[14px] font-medium">{friend.name}</div>
              {friend.statusMessage && <div className="text-[10px] font-normal">{friend.statusMessage}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
