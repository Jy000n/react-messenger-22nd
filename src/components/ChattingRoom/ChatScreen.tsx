import { useEffect, useRef, useState } from 'react';
import DefaultProfile from '@/assets/svgs/profile/profileIMG-default.svg';
import Dropdown from '@/assets/svgs/drop-down/dropdown.svg';
import SeeAll from '@/assets/svgs/drop-down/see-all.svg';
import { MY_ID } from '@/type/ChatType.types';
import { useChat } from '@/hooks/useChat';
import { formatDate, formatTime } from '@/type/DateType.types';

// minutes 일치 비교 (for rendering 채팅메시지)
const isSameMinute = (d1: Date, d2: Date) => {
  return d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes();
};

const MAX_MSG_HEIGHT = 288;

const ChatScreen = () => {
  const { messages } = useChat();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const msgRefs = useRef<Record<string, HTMLDivElement>>({});
  const [expandedMsgs, setExpandedMsgs] = useState<Record<string, boolean>>({});
  const [overflowMsgs, setOverflowMsgs] = useState<Record<string, boolean>>({});

  // 스크롤 항상 아래로
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth', // 부드러운 스크롤
      });
    }
  }, [messages]);

  // 전체보기 (메시지 overflow 체크)
  useEffect(() => {
    const newOverflow: Record<string, boolean> = {};
    messages.forEach((msg) => {
      const el = msgRefs.current[msg.msgId];
      if (el) {
        newOverflow[msg.msgId] = el.scrollHeight > MAX_MSG_HEIGHT;
      }
    });
    setOverflowMsgs(newOverflow);
  }, [messages]);

  const toggleExpand = (msgId: string) => {
    setExpandedMsgs((prev) => ({ ...prev, [msgId]: !prev[msgId] }));
  };

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

        // 전체보기 표시 여부
        const isExpanded = expandedMsgs[msg.msgId] || false;
        const isOverflow = overflowMsgs[msg.msgId] || false;

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

                  <div
                    ref={(el) => {
                      if (el) msgRefs.current[msg.msgId] = el;
                    }}
                    className={`${isMine ? 'mb-[-15px]' : showProfileAndName ? '' : 'mt-[-15px] ml-[51.65px]'}`}
                  >
                    <div className={`flex flex-row gap-[8px] ${isMine ? 'flex-row-reverse' : ''}`}>
                      {isOverflow && !isExpanded ? (
                        <>
                          <div className="items-starts flex flex-col">
                            <div
                              className={`${!isExpanded ? 'max-h-[280px] overflow-hidden rounded-t-[6px]' : 'rounded-[6px]'} mb-[4px] max-w-[208px] break-words whitespace-pre-wrap ${isMine ? 'bg-[#815840] text-white' : 'bg-[#EBE4E0]'} px-[10px] py-[8px] font-normal`}
                            >
                              {msg.content}
                            </div>

                            <div className="mt-[4px] w-full">
                              <button
                                onClick={() => toggleExpand(msg.msgId)}
                                className={`flex h-[26px] w-full items-center justify-between text-left text-[#242628] ${isMine ? 'bg-[#815840] text-white' : 'bg-[#EBE4E0] text-[#242628]'} mt-[-7.5px] cursor-pointer rounded-b-[6px] px-[10px] py-[8px] text-[12px]`}
                              >
                                전체보기
                                <img
                                  src={isMine ? SeeAll : Dropdown}
                                  alt="드롭다운"
                                  className={`${isMine ? 'h-[14px] w-[14px]' : 'h-[16px] w-[16px] -rotate-90'} `}
                                />
                              </button>
                            </div>
                          </div>
                          {showTime && (
                            <div className="flex items-end text-[10px] text-[#888A8C]">{formatTime(msg.sentAt)}</div>
                          )}
                        </>
                      ) : (
                        <>
                          <div
                            className={`mb-[4px] max-w-[208px] rounded-[6px] break-words whitespace-pre-wrap ${isMine ? 'bg-[#815840] text-white' : 'bg-[#EBE4E0]'} px-[10px] py-[8px] font-normal`}
                          >
                            {msg.content}
                          </div>
                          {/* // 전체보기 없을 때는 오른쪽 아래에 시간 */}
                          {showTime && (
                            <div className="mb-[3.5px] flex items-end">
                              <span className="text-[10px] text-[#888A8C]">{formatTime(msg.sentAt)}</span>
                            </div>
                          )}
                        </>
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
