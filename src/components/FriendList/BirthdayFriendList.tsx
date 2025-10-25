import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';

const BirthdayProfileList = () => {
  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-[12px]">
        <div className="flex justify-between">
          <div className="flex">
            <div className="mb-[10px] text-[14px] font-medium">생일인 친구</div>
            <div className="relative top-[-12px] flex cursor-pointer items-end px-[10px] text-[9px] font-medium text-[#373633]/50 underline">
              더보기
            </div>
          </div>
          <img src={DropDown} alt="드롭다운" className="h-[20px] w-[20px] rotate-180 cursor-pointer" />
        </div>
        <div className="mb-[20px] flex gap-[9px]">
          <div className="w-[43px] flex-col">
            <div className="">
              <img src={ProfileIMGDefault} alt="업데이트프로필" className="cursor-pointer" />
            </div>
            <div className="mt-[8px] cursor-pointer text-center text-[10px] font-medium">세오스</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayProfileList;
