import { useState } from 'react';
import { menuItems, type MenuItem } from '@/constants/BottomMenubarItems';

const CommonLowerMenubar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-between px-[30px]">
      {menuItems.map((item: MenuItem) => {
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
