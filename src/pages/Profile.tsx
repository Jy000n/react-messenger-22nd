import ProfileMenubar from '@/components/MenuBar/ProfileMenubar';
import StatusBar from '@/components/MenuBar/StatusBar';
import UserProfile from '@/components/UserProfile/UserProfile';

const Profile = () => {
  return (
    <div className="h-screen w-full bg-[#5E544E]">
      <StatusBar theme="brown" />
      <ProfileMenubar />
      <UserProfile />
    </div>
  );
};

export default Profile;
