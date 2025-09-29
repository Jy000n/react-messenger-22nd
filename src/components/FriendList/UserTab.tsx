import ProflieIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';

const UserTab = () => {
  return (
    <div className="w-full cursor-pointer p-[20px]">
      <div className="flex flex-row rounded-[4px] bg-[#815840] p-[10px]">
        <img src={ProflieIMGDefault} alt="유저프사" className="h-[54px] w-[54px]" />
        <span className="ml-[15px] flex items-center text-[16px] font-semibold text-white">사용자</span>
      </div>
    </div>
  );
};

export default UserTab;
