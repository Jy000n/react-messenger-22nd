import ProfileMenubar from '@/components/MenuBar/ProfileMenubar';
import StatusBar from '@/components/MenuBar/StatusBar';
import UserProfile from '@/components/UserProfile/UserProfile';

const Profile = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#5E544E]">
      <div>
        <StatusBar theme="brown" />
        <ProfileMenubar />
      </div>
      <div className="pb-[34px]">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
