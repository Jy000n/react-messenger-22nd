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
    <div className="px-5">
      <div className="flex justify-between">
        <div className="body-med">즐겨찾기</div>
        <img src={DropDown} alt="드롭다운" className="h-5 w-5 rotate-180 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-1">
        {bookmarkRooms.map((room) => {
          const messagess = roomMessages[room.roomId] || [];
          const lastMessage = messagess.length > 0 ? messagess[messagess.length - 1] : null;

          return (
            <div
              key={room.roomId}
              className="flex cursor-pointer py-2.5"
              onClick={() => navigate(`/chat/${room.roomId}`)}
            >
              <div className="mr-[12.44px] h-13.5">
                <img src={ProfileIMGDefault} alt="친구프로필" className="h-13.5 w-13.5" />
              </div>
              <div className="flex w-67.5 flex-col justify-center gap-0.5">
                <div className="flex items-center">
                  <div className="flex flex-1 items-center gap-1">
                    <div className="title4-sm">{room.name}</div>
                    <img src={FavoriteChatting} alt="즐겨찾기" className="relative top-[-1px] h-4 w-4" />
                  </div>
                  <div className="flex-end caption2-reg" style={{ color: 'var(--color-gray-6)' }}>
                    {lastMessage ? formatTimeAMPM(lastMessage.sentAt.toISOString()) : ''}
                  </div>
                </div>
                <div className="caption1-reg">{lastMessage?.content || ''}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookmarkChattingList;
