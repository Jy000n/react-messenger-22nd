import { useState } from 'react';
import { MY_ID } from '@/type/ChatType.types';
import { useChat } from '@/hooks/useChat';
import InputAddButton from '@/assets/svgs/chat/input-add-button.svg';
import Imoji from '@/assets/svgs/chat/imoji.svg';
import SendButton from '@/assets/svgs/chat/send-button.svg';

const ChattingContextInput = () => {
  const { setMessages } = useChat();
  const [inputValue, setInputValue] = useState('');

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
    <div className="mt-[8px] h-[78px] rounded-b-[15.7px] bg-[#EBE4E0] px-[20px] pt-[16px]">
      <div className="h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-white">
        <img
          src={InputAddButton}
          alt="input-add-button"
          className="relative top-[11px] left-[10.5px] h-[15px] w-[15px] cursor-pointer"
        />
      </div>
      <div className="ml-[10px] h-[36px] items-center">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메세지 입력"
          className={`h-[36px] ${inputValue.trim() !== '' ? 'w-[236px]' : 'w-[279px]'} relative top-[-36px] left-[37px] rounded-[6px] bg-white pr-[40px] pl-[12px] placeholder-[#BABCBE] outline-none`}
        />
        <img
          src={Imoji}
          alt="이모지"
          className={`${inputValue.trim() !== '' ? 'left-[240px]' : 'left-[280px]'} relative top-[-66px] h-[24px] w-[24px] cursor-pointer`}
        />
      </div>
      <div>
        {inputValue.trim() !== '' && (
          <img
            src={SendButton}
            alt="전송"
            onClick={handleSend}
            className={`relative top-[-70px] left-[295px] h-[32px] w-[32px] cursor-pointer`}
          />
        )}
      </div>
    </div>
  );
};

export default ChattingContextInput;
