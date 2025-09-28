import { useState } from 'react';
import { MY_ID } from '@/type/ChatType.types';
import { useChat } from '@/hooks/useChat';
import InputAddButton from '@/assets/svgs/chat/input-add-button.svg';
import Imoji from '@/assets/svgs/chat/imoji.svg';
import SendButton from '@/assets/svgs/chat/send-button.svg';

const ChattingContextInput = () => {
  const { setMessages } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        msgId: `msg-${Date.now()}`,
        senderId: MY_ID,
        senderName: '나',
        content: inputValue,
        type: 'text',
        sentAt: new Date(),
      },
    ]);

    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="mt-[8px] flex h-[78px] items-center justify-between gap-[10px] rounded-b-[15.7px] bg-[#EBE4E0] px-[20px] py-[16px] pb-[18px]">
      <div>
        <img
          src={InputAddButton}
          alt="input-add-button"
          className="h-[36px] w-[36px] cursor-pointer rounded-[6px] bg-white p-[11px]"
        />
      </div>

      <div className={`flex h-[36px] flex-1 items-center rounded-[6px] bg-white`}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메세지 입력"
          className={`placeholder-[#BABCBE]} flex-1 pl-[10px] outline-none`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <img
          src={Imoji}
          alt="imoji"
          className={`h-[24px] w-[24px] cursor-pointer ${isHovered ? 'translate-x-[-13px]' : 'translate-x-[-11px]'}`}
        />
      </div>
      <div>
        {(isHovered || inputValue.trim() !== '') && (
          <img src={SendButton} alt="send-button" onClick={handleSend} className="h-[30px] w-[30px] cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default ChattingContextInput;
