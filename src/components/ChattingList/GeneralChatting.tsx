import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';

const GeneralChatting = () => {
  return (
    <div className="px-[20px]">
      <div className="pt-[5px]">
        <div className="h-[0.5px] w-full bg-[#373633]/10" />
      </div>
      <div className="flex justify-between pt-[14px]">
        <div className="text-[14px] font-medium">일반채팅</div>
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
                <div className="text-[16px] font-medium">이름</div>
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
                <div className="text-[16px] font-medium">고구마</div>
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
                <div className="text-[16px] font-medium">고구마</div>
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
                <div className="text-[16px] font-medium">고구마</div>
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
                <div className="text-[16px] font-medium">고구마</div>
              </div>
              <div className="flex-end text-[10px] text-[#A1A3A5]">오후 3:14</div>
            </div>
            <div className="text-[10px] font-normal">안녕하세요 세오스입니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralChatting;
