import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import FavoriteStar from '@/assets/svgs/profile/favorites-friends-star.svg';
import friendsData from '@/data/friendsData.json';

const BookmarkFriendList = () => {
  const favoriteFriends = friendsData.filter((friend) => friend.isFavorite);

  if (favoriteFriends.length === 0) return null;

  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-[13px]">
        <div className="flex justify-between">
          <div className="mb-[10px] text-[14px] font-medium">즐겨찾기</div>
          <img src={DropDown} alt="드롭다운" className="h-[20px] w-[20px] rotate-180 cursor-pointer" />
        </div>

        <div className="mb-[20px]">
          {favoriteFriends.map((friend) => (
            <div className="flex py-[8px]">
              <div className="mr-[12.44px] h-[42px]">
                <img
                  src={friend.profileImage || ProfileIMGDefault}
                  alt="즐겨찾기프로필"
                  className="h-[42px] w-[42px] cursor-pointer"
                />
                <img
                  src={FavoriteStar}
                  alt="즐겨찾기"
                  className="relative top-[-44.5px] left-[33.5px] h-[12.442px] w-[12.442px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="cursor-pointer text-[14px] font-medium">{friend.name}</div>
                {friend.statusMessage && <div className="text-[10px] font-normal">{friend.statusMessage}</div>}{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookmarkFriendList;
