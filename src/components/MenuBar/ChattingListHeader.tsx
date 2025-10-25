import Search from '@/assets/svgs/menubar/upper-menubar/search.svg';
import AddChatting from '@/assets/svgs/menubar/upper-menubar/add-chatting.svg';
import Settings from '@/assets/svgs/menubar/upper-menubar/settings-black.svg';

const ChattingListHeader = () => {
  return (
    <div className="mt-[-5px] mb-[20px] flex justify-between px-[20px]">
      <div className="text-[20px] font-semibold">채팅</div>
      <div className="flex gap-[12px]">
        <img src={Search} alt="검색" className="h-[24px] w-[24px] cursor-pointer" />
        <img src={AddChatting} alt="채팅추가" className="h-[24px] w-[24px] cursor-pointer" />
        <img src={Settings} alt="설정" className="h-[24px] w-[24px] cursor-pointer" />
      </div>
    </div>
  );
};

export default ChattingListHeader;
