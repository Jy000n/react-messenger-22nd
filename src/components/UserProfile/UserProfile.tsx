import ProfileIMG from '@/assets/svgs/profile/profileIMG-default.svg';
import ChatWithMe from '@/assets/svgs/profile/chat-with-me.svg';
import Edit from '@/assets/svgs/profile/edit.svg';
import MultiProfile from '@/assets/svgs/profile/multi-profile.svg';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="justify-center">
        <img src={ProfileIMG} alt="프로필이미지" className="mb-[-77px] ml-[20px] h-[100px] w-[100px] drop-shadow-sm" />
        <div className="flex h-[220px] w-[335px] flex-col rounded-[10px] bg-white">
          <span className="mt-[25px] ml-[135px] text-[19px] font-semibold">천영현</span>
          <span className="mt-[3px] ml-[136px] cursor-pointer text-[13px] font-normal text-[#A1A3A5] underline">
            SNS 바로가기
          </span>

          <div className="mt-[35px] flex h-[72px] items-center justify-center gap-[20px] text-[12px] font-normal">
            <div className="flex cursor-pointer flex-col items-center">
              <img src={ChatWithMe} alt="셀프채팅" className="mb-[12px] h-[24px] w-[24px]" />
              <span className="">나와의 채팅</span>
            </div>
            <div className="h-[72px] border border-[#E4E4E4]"></div>
            <div className="flex cursor-pointer flex-col items-center">
              <img src={Edit} alt="프로필 편집" className="mb-[12px] h-[24px] w-[24px]" />
              <span>프로필 편집</span>
            </div>
            <div className="h-[72px] border-[0.1px] border-[#E4E4E4]"></div>
            <div className="flex cursor-pointer flex-col items-center">
              <img src={MultiProfile} alt="멀티프로필" className="mb-[12px] h-[24px] w-[24px]" />
              <span>멀티 프로필</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
