import ProfileMenubar from '@/components/MenuBar/ProfileMenubar';
import StatusBar from '@/components/MenuBar/StatusBar';
import UserProfile from '@/components/UserProfile/UserProfile';

const Profile = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-between bg-[#5E544E]">
      <div>
        <StatusBar theme="brown" />
        <ProfileMenubar />
      </div>
      <div className="mb-[34px]">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
