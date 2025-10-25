import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGChannel from '@/assets/svgs/profile/profileIMG-channel.svg';

const BirthdayProfileList = () => {
  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-[12px]">
        <div className="flex justify-between">
          <div className="flex">
            <div className="mb-[10px] text-[14px] font-medium">채널</div>
            <div className="relative top-[-12px] flex cursor-pointer items-end px-[10px] text-[9px] font-medium text-[#373633]/50 underline">
              더보기
            </div>
          </div>
          <img src={DropDown} alt="드롭다운" className="h-[20px] w-[20px] rotate-180 cursor-pointer" />
        </div>
        <div className="mb-[20px] flex gap-[6px]">
          <div className="flex cursor-pointer rounded-[6px] bg-[#EBE4E0] p-[8px]">
            <img src={ProfileIMGChannel} alt="채널프로필" className="mr-[11px] h-[42px] w-[42px]" />
            <div className="flex flex-col justify-center gap-[3px]">
              <div className="text-[12px] font-semibold">세오스</div>
              <div className="text-[10px]">안녕하세요 세오스입니다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayProfileList;
