import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import FavoriteStar from '@/assets/svgs/profile/favorites-friends-star.svg';

const BookmarkFriendList = () => {
  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-[13px]">
        <div className="flex justify-between">
          <div className="mb-[10px] text-[14px] font-medium">즐겨찾기</div>
          <img src={DropDown} alt="드롭다운" className="h-[20px] w-[20px] rotate-180 cursor-pointer" />
        </div>

        <div className="mb-[20px]">
          <div className="flex py-[8px]">
            <div className="mr-[12.44px] h-[42px]">
              <img src={ProfileIMGDefault} alt="즐겨찾기프로필" className="h-[42px] w-[42px] cursor-pointer" />
              <img
                src={FavoriteStar}
                alt="즐겨찾기"
                className="relative top-[-44.5px] left-[33.5px] h-[12.442px] w-[12.442px]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="cursor-pointer text-[14px] font-medium">세오스</div>
            </div>
          </div>

          <div className="flex py-[8px]">
            <div className="mr-[12.44px] h-[42px]">
              <img src={ProfileIMGDefault} alt="즐겨찾기프로필" className="h-[42px] w-[42px] cursor-pointer" />
              <img
                src={FavoriteStar}
                alt="즐겨찾기"
                className="relative top-[-44.5px] left-[33.5px] h-[12.442px] w-[12.442px]"
              />
            </div>
            <div className="flex cursor-pointer flex-col justify-center">
              <div className="text-[14px] font-medium">세오스</div>
              <div className="text-[10px] font-normal">안녕하세요 세오스입니다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkFriendList;
