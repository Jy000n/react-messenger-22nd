import ProfileMenubar from '@/components/MenuBar/ProfileMenubar';
import StatusBar from '@/components/MenuBar/StatusBar';
import UserProfile from '@/components/UserProfile/UserProfile';

const Profile = () => {
  return (
    <div className="h-screen w-full bg-[#5E544E]">
      <StatusBar theme="brown" />
      <ProfileMenubar />
      <div className="mt-auto flex h-[50%] border"></div>
      <UserProfile />
    </div>
  );
};

export default Profile;
