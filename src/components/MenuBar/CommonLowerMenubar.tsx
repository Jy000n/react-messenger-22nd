import { useState } from 'react';
import FriendListActive from '@/assets/svgs/menubar/lower-menubar/friendlist-active.svg';
import FriendListInActive from '@/assets/svgs/menubar/lower-menubar/friendlist-inactive.svg';
import PrivateChattingInactive from '@/assets/svgs/menubar/lower-menubar/private-chatting-inactive.svg';
import PrivateChattingActive from '@/assets/svgs/menubar/lower-menubar/private-chatting-active.svg';
import OpenChatting from '@/assets/svgs/menubar/lower-menubar/open-chatting.svg';
import Shopping from '@/assets/svgs/menubar/lower-menubar/shopping.svg';
import SeeMore from '@/assets/svgs/menubar/lower-menubar/see-more.svg';

const menuItems = [
  { id: 0, label: '친구', activeIcon: FriendListActive, inactiveIcon: FriendListInActive },
  { id: 1, label: '채팅', activeIcon: PrivateChattingActive, inactiveIcon: PrivateChattingInactive },
  { id: 2, label: '오픈채팅', icon: OpenChatting },
  { id: 3, label: '쇼핑', icon: Shopping },
  { id: 4, label: '더보기', icon: SeeMore },
];
const CommonLowerMenubar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-between px-[30px]">
      {menuItems.map((item) => {
        let iconSrc = item.icon || item.inactiveIcon;
        if (item.activeIcon && item.inactiveIcon) {
          iconSrc = active === item.id ? item.activeIcon : item.inactiveIcon;
        }

        return (
          <div key={item.id} onClick={() => setActive(item.id)} className="cursor-pointer text-center">
            <img src={iconSrc} alt={item.label} className="mx-auto h-[24px] w-[24px]" />
            <span
              className={`text-[10px] ${
                item.activeIcon && item.inactiveIcon && active === item.id ? 'text-[#7F4C2F]' : 'text-[#BABCBE]'
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CommonLowerMenubar;

//  <div className="flex justify-between px-[30px]">
//       <div className="cursor-pointer text-center">
//         <img src={FriendListActive} alt="친구" className="h-[24px] w-[24px]" />
//         <span className="text-[10px] text-[#7F4C2F]">친구</span>
//       </div>
//       <div className="cursor-pointer text-center">
//         <img src={PrivateChattingUnactive} alt="채팅" className="h-[24px] w-[24px]" />
//         <span className="text-[10px] text-[#BABCBE]">채팅</span>
//       </div>
//       <div className="cursor-pointer text-center">
//         <img src={OpenChatting} alt="오픈채팅" className="h-[24px] w-[24px]" />
//         <span className="text-[10px] text-[#BABCBE]">오픈채팅</span>
//       </div>
//       <div className="cursor-pointer text-center">
//         <img src={Shopping} alt="쇼핑" className="h-[24px] w-[24px]" />
//         <span className="text-[10px] text-[#BABCBE]">쇼핑</span>
//       </div>
//       <div className="cursor-pointer text-center">
//         <img src={SeeMore} alt="더보기" className="h-[24px] w-[24px]" />
//         <span className="text-[10px] text-[#BABCBE]">더보기</span>
//       </div>
//     </div>
