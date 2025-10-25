import { useNavigate } from 'react-router-dom';
import chatData from '@/data/chatMessages.json';
import { formatTimeAMPM } from '@/utils/timeUtils';
import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';

const GeneralChattingList = () => {
  const navigate = useNavigate();
  const generalRooms = chatData.filter((room) => !room.isFavorite);

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
        {generalRooms.map((room) => (
          <div
            key={room.roomId}
            className="flex cursor-pointer py-[10px]"
            onClick={() => navigate(`/chat/${room.roomId}`)}
          >
            <div className="mr-[12.44px] h-[42px]">
              <img src={ProfileIMGDefault} alt="친구프로필" className="h-[42px] w-[42px]" />
            </div>
            <div className="flex w-[270px] flex-col justify-center">
              <div className="flex items-center">
                <div className="flex flex-1 items-center gap-[4px]">
                  <div className="text-[16px] font-medium">{room.name}</div>
                </div>
                <div className="flex-end text-[10px] text-[#A1A3A5]">
                  {' '}
                  {room.messages.length > 0 ? formatTimeAMPM(room.messages[room.messages.length - 1].sentAt) : ''}
                </div>
              </div>
              <div className="text-[10px] font-normal"> {room.messages[room.messages.length - 1]?.content || ''}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralChattingList;
