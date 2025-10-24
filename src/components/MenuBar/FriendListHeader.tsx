import { headerItems, type HeaderItem } from '@/constants/FriendListHeaderItems';

const FriendListHeader = () => {
  return (
    <div className="mt-[-5px] flex items-center justify-between px-[20px]">
      <div className="text-[20px] font-semibold">친구</div>
      <div className="flex gap-[12px]">
        {headerItems.map((item: HeaderItem) => (
          <img key={item.id} alt={item.label} src={item.src} className="h-[24px] w-[24px] cursor-pointer" />
        ))}
      </div>
    </div>
  );
};

export default FriendListHeader;
