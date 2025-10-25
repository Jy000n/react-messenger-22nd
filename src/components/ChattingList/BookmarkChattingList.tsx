import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import FavoriteChatting from '@/assets/svgs/profile/favorite-rooms-star.svg';

const BookmarkChattingList = () => {
  return (
    <div className="px-[20px]">
      <div className="flex justify-between">
        <div className="text-[14px] font-medium">즐겨찾기</div>
        <img src={DropDown} alt="드롭다운" className="h-[20px] w-[20px] rotate-180 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="flex cursor-pointer py-[10px]">
          <div className="mr-[12.44px] h-[42px]">
            <img src={ProfileIMGDefault} alt="친구프로필" className="h-[42px] w-[42px]" />
          </div>
          <div className="flex w-[270px] flex-col justify-center">
            <div className="flex items-center">
              <div className="flex flex-1 items-center gap-[4px]">
                <div className="text-[16px] font-medium">고구마</div>
                <img src={FavoriteChatting} alt="즐겨찾기" className="relative top-[-1.5px] h-[16px] w-[16px]" />
              </div>
              <div className="flex-end text-[10px] text-[#A1A3A5]">오후 3:14</div>
            </div>
            <div className="text-[10px] font-normal">안녕하세요 세오스입니다.</div>
          </div>
        </div>
        <div className="flex cursor-pointer py-[10px]">
          <div className="mr-[12.44px] h-[42px]">
            <img src={ProfileIMGDefault} alt="친구프로필" className="h-[42px] w-[42px]" />
          </div>
          <div className="flex w-[270px] flex-col justify-center">
            <div className="flex items-center">
              <div className="flex flex-1 items-center gap-[4px]">
                <div className="text-[16px] font-medium">그룹명</div>
                <div className="flex items-center text-[14px] font-medium text-[#A1A3A5]">40</div>
                <img src={FavoriteChatting} alt="즐겨찾기" className="relative top-[-1.5px] h-[16px] w-[16px]" />
              </div>
              <div className="flex-end text-[10px] text-[#A1A3A5]">오후 3:14</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-normal">안녕하세요 세오스입니다.</div>
              <div className="flex h-[21px] w-[21px] items-center justify-center rounded-[31.5px] bg-[#FF613A] text-center text-[9px] text-white">
                18
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkChattingList;
