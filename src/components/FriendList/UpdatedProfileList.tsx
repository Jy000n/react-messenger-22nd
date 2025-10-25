import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import UpdatesCircle from '@/assets/svgs/profile/updates-circle.svg';
import friendsData from '@/data/friendsData.json';

const UpdatedProfileList = () => {
  const updatedFriends = friendsData.filter((friend) => friend.hasUpdatedProfile);

  if (updatedFriends.length === 0) return null;

  return (
    <div className="mb-5 pt-3.25">
      <div className="flex justify-between">
        <div className="body-med mb-2.5">업데이트한 프로필</div>
        <img src={DropDown} alt="드롭다운" className="h-5 w-5 rotate-180 cursor-pointer" />
      </div>
      <div className="flex gap-2.25">
        {updatedFriends.map((friend) => (
          <div key={friend.userId} className="w-10.75 flex-col">
            <div className="">
              <img src={friend.profileImage || ProfileIMGDefault} alt="업데이트프로필" className="cursor-pointer" />
              <img src={UpdatesCircle} alt="업데이트" className="relative top-[-43px] left-[35px] h-2 w-2" />
            </div>
            <div className="cursor-pointer text-center text-[10px] font-medium">{friend.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatedProfileList;
