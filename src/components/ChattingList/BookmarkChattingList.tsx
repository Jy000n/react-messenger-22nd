import { useNavigate } from 'react-router-dom';
import chatData from '@/data/chatMessages.json';
import { formatTimeAMPM } from '@/utils/timeUtils';
import DropDown from '@/assets/svgs/drop-down/dropdown.svg';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import FavoriteChatting from '@/assets/svgs/profile/favorite-rooms-star.svg';
import { useChat } from '@/hooks/useChat';

const BookmarkChattingList = () => {
  const navigate = useNavigate();
  const { roomMessages } = useChat();
  const bookmarkRooms = chatData.filter((room) => room.isFavorite);

  return (
    <div className="px-[20px]">
      <div className="flex justify-between">
        <div className="text-[14px] font-medium">즐겨찾기</div>
        <img src={DropDown} alt="드롭다운" className="h-[20px] w-[20px] rotate-180 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-[4px]">
        {bookmarkRooms.map((room) => {
          const messagess = roomMessages[room.roomId] || [];
          const lastMessage = messagess.length > 0 ? messagess[messagess.length - 1] : null;

          return (
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
                    <img src={FavoriteChatting} alt="즐겨찾기" className="relative top-[-1.5px] h-[16px] w-[16px]" />
                  </div>
                  <div className="flex-end text-[10px] text-[#A1A3A5]">
                    {lastMessage ? formatTimeAMPM(lastMessage.sentAt.toISOString()) : ''}{' '}
                  </div>
                </div>
                <div className="text-[10px] font-normal">{lastMessage?.content || ''}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookmarkChattingList;
