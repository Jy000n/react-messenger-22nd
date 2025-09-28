import FriendListActive from '@/assets/svgs/menubar/lower-menubar/friendlist-active.svg';
import PrivateChattingUnactive from '@/assets/svgs/menubar/lower-menubar/private-chatting-unactive.svg';
import OpenChatting from '@/assets/svgs/menubar/lower-menubar/open-chatting.svg';
import Shopping from '@/assets/svgs/menubar/lower-menubar/shopping.svg';
import SeeMore from '@/assets/svgs/menubar/lower-menubar/see-more.svg';

const CommonLowerMenubar = () => {
  return (
    <div className="flex justify-between px-[30px]">
      <div className="cursor-pointer text-center">
        <img src={FriendListActive} alt="친구" className="h-[24px] w-[24px]" />
        <span className="text-[10px] text-[#7F4C2F]">친구</span>
      </div>
      <div className="cursor-pointer text-center">
        <img src={PrivateChattingUnactive} alt="채팅" className="h-[24px] w-[24px]" />
        <span className="text-[10px]">채팅</span>
      </div>
      <div className="cursor-pointer text-center">
        <img src={OpenChatting} alt="오픈채팅" className="h-[24px] w-[24px]" />
        <span className="text-[10px]">오픈채팅</span>
      </div>
      <div className="cursor-pointer text-center">
        <img src={Shopping} alt="쇼핑" className="h-[24px] w-[24px]" />
        <span className="text-[10px]">쇼핑</span>
      </div>
      <div className="cursor-pointer text-center">
        <img src={SeeMore} alt="더보기" className="h-[24px] w-[24px]" />
        <span className="text-[10px]">더보기</span>
      </div>
    </div>
  );
};

export default CommonLowerMenubar;
