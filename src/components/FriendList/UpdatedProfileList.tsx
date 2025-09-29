import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import UpdatesCircle from '@/assets/svgs/profile/updates-circle.svg';

const UpdatedProfileList = () => {
  return (
    <div className="py-[13px]">
      <div className="mb-[10px] text-[14px] font-medium">업데이트한 프로필</div>
      <div className="flex gap-[8px]">
        <img src={ProfileIMGDefault} alt="업데이트프로필" className="cursor-pointer" />
        <img src={UpdatesCircle} alt="업데이트" />
      </div>
    </div>
  );
};

export default UpdatedProfileList;
