import { useEffect, useRef } from 'react';
import DefaultProfile from '@/assets/svgs/profile/profileIMG-default.svg';
import { MY_ID } from '@/type/ChatType.types';
import { useChat } from '@/hooks/useChat';
import { formatDate, formatTime } from '@/type/DateType.types';
// import { useScrollbarDrag } from '@/hooks/useScrollbarDrag';

// minutes 일치 비교 (for rendering 채팅메시지)
const isSameMinute = (d1: Date, d2: Date) => {
  return d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes();
};

const ChatScreen = () => {
  const { messages } = useChat();
  const containerRef = useRef<HTMLDivElement | null>(null);
  // const isDragging = useScrollbarDrag(containerRef);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={containerRef} className="box-border h-[calc(100vh-100px)] overflow-y-auto">
      {messages.map((msg, idx) => {
        const isMine = msg.senderId === MY_ID;
        const prevMsg = idx > 0 ? messages[idx - 1] : null;
        const nextMsg = idx < messages.length - 1 ? messages[idx + 1] : null;

        // 날짜 비교
        const showDate = idx === 0 || formatDate(msg.sentAt) !== formatDate(messages[idx - 1].sentAt);

        // 프로필+이름 표시 조건
        const showProfileAndName =
          !prevMsg ||
          prevMsg.senderId !== msg.senderId ||
          (prevMsg.senderId === msg.senderId && !isSameMinute(prevMsg.sentAt, msg.sentAt));

        // 시간 표시 여부
        const showTime = !nextMsg || nextMsg.senderId !== msg.senderId || !isSameMinute(nextMsg.sentAt, msg.sentAt);

        return (
          <div className="text-[#0B0E0F]">
            <div
              key={msg.msgId}
              className={`px-[20px] py-[8px] ${isMine ? 'justify-end' : 'justify-start'} ${!isMine && showProfileAndName && prevMsg ? 'mt-[-4px]' : ''}`}
            >
              {showDate && (
                <div className={`flex items-center justify-center`}>
                  <span className="mb-[12px] flex h-[26px] w-[119px] items-center rounded-[1000px] bg-[#ECEEF0] px-[24px] py-[4px] text-center text-[10px] font-normal whitespace-nowrap text-[#6F7173]">
                    {formatDate(msg.sentAt)}
                  </span>
                </div>
              )}
              <div className="flex flex-row gap-[8px]">
                {!isMine && showProfileAndName && (
                  <img src={DefaultProfile} alt={msg.senderName} className="h-[44px] w-[44px] rounded-[6px]" />
                )}
                <div className={`flex flex-col text-[12px] ${isMine ? 'ml-auto items-end' : ''}`}>
                  {!isMine && showProfileAndName && (
                    <span className="align-center mb-[4px] flex h-[18px] font-semibold">{msg.senderName}</span>
                  )}

                  <div className={`${isMine ? 'mb-[-15px]' : showProfileAndName ? '' : 'mt-[-15px] ml-[51.65px]'}`}>
                    <div className={`flex flex-row gap-[8px] ${isMine ? 'flex-row-reverse' : ''}`}>
                      <span
                        className={`mb-[4px] max-w-[208px] rounded-[6px] ${isMine ? 'bg-[#815840] text-white' : 'bg-[#EBE4E0]'} px-[10px] py-[8px] font-light`}
                      >
                        {msg.content}
                      </span>
                      {showTime && (
                        <span className="mb-[4px] flex h-[16px] items-center self-end font-normal text-[#888A8C]">
                          {formatTime(msg.sentAt)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
