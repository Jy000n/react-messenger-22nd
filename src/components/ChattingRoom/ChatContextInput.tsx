// import { useState, useRef } from 'react';
// import { MY_ID } from '@/type/ChatType.types';
// import { useChat } from '@/hooks/useChat';
// import InputAddButton from '@/assets/svgs/chat/input-add-button.svg';
// import Imoji from '@/assets/svgs/chat/imoji.svg';
// import SendButton from '@/assets/svgs/chat/send-button.svg';

// const ChattingContextInput = () => {
//   const { setMessages } = useChat();
//   const [inputValue, setInputValue] = useState('');

//   const textareaRef = useRef<HTMLTextAreaElement>(null); // 추가
//   const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
//     const textarea = e.currentTarget;
//     // 기본 높이
//     const baseHeight = 36;
//     // Enter가 들어간 경우에만 높이 늘리기
//     if (textarea.value.includes('\n')) {
//       textarea.style.height = 'auto';
//       textarea.style.height = textarea.scrollHeight + 'px';
//     } else {
//       textarea.style.height = baseHeight + 'px';
//     }
//   };

//   const handleSend = () => {
//     if (!inputValue.trim()) return;

//     setMessages((prev) => [
//       ...prev,
//       {
//         msgId: `msg-${Date.now()}`,
//         senderId: MY_ID,
//         senderName: '나',
//         content: inputValue,
//         type: 'text',
//         sentAt: new Date(),
//       },
//     ]);

//     setInputValue('');

//     // 전송 후 높이 초기화
//     if (textareaRef.current) {
//       textareaRef.current.style.height = baseHeight + 'px';
//     }
//   };

//   // const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//   //   if (e.nativeEvent.isComposing) return;

//   //   if (e.key === 'Enter') {
//   //     if (e.shiftKey) {
//   //       // Shift + Enter → 줄바꿈
//   //       return;
//   //     } else {
//   //       // Enter → 전송
//   //       e.preventDefault(); // 줄바꿈 방지
//   //       handleSend();
//   //     }
//   //   }
//   // };
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.nativeEvent.isComposing) return;

//     if (e.key === 'Enter') {
//       if (e.shiftKey) {
//         // Shift + Enter → 줄바꿈, 높이 늘리기
//         e.preventDefault();
//         const textarea = e.currentTarget;
//         textarea.value += '\n';
//         textarea.style.height = 'auto';
//         textarea.style.height = textarea.scrollHeight + 'px';
//         setInputValue(textarea.value);
//       } else {
//         // Enter → 전송
//         e.preventDefault();
//         handleSend();
//       }
//     }
//   };

//   return (
//     <div className="mt-[8px] h-[78px] rounded-b-[15.7px] bg-[#EBE4E0] px-[20px] pt-[16px]">
//       <div className="h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-white">
//         <img
//           src={InputAddButton}
//           alt="input-add-button"
//           className="relative top-[11px] left-[10.5px] h-[15px] w-[15px] cursor-pointer"
//         />
//       </div>
//       <div className="relative ml-[10px] h-[36px] items-center">
//         <textarea
//           value={inputValue}
//           onInput={handleInput}
//           ref={textareaRef}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="메세지 입력"
//           className={`absolute bottom-0 h-[36px] max-h-[188px] overflow-hidden py-[7.5px] ${inputValue.trim() !== '' ? 'w-[236px]' : 'w-[279px]'} relative top-[-36px] left-[37px] resize-none rounded-[6px] bg-white pr-[50px] pl-[12px] placeholder-[#BABCBE] outline-none`}
//         />
//         <img
//           src={Imoji}
//           alt="이모지"
//           className={`${inputValue.trim() !== '' ? 'left-[240px]' : 'left-[280px]'} relative top-[-73px] h-[24px] w-[24px] cursor-pointer`}
//         />
//       </div>
//       <div>
//         {inputValue.trim() !== '' && (
//           <img
//             src={SendButton}
//             alt="전송"
//             onClick={handleSend}
//             className={`relative top-[-70px] left-[295px] h-[32px] w-[32px] cursor-pointer`}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChattingContextInput;
// // <div className="flex gap-[10px] rounded-b-[15.7px] bg-[#ebe4e0] px-[20px] py-[17px]">
// //   <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-[#fff]">
// //     <img src={InputAddButton} alt="추가" className="h-[15px] w-[15px] cursor-pointer" />
// //   </div>
// //   <div className="flex gap-[10px] rounded-[6px] bg-[#fff]">
// //     <textarea
// //       placeholder={'메세지 입력'}
// //       rows={1}
// //       value={inputValue}
// //       onChange={(e) => setInputValue(e.target.value)}
// //       onKeyDown={handleKeyDown}
// //       className={`max-h-[6rem] resize-none rounded-[6px] border bg-[#fff] px-[12px] py-[8px] text-[14.1px] font-normal placeholder-[#A1A3A5]`}
// //     />
// //     <img src={Imoji} alt="이모티콘" className="cursor-pointer" />
// //   </div>
// //   <div>
// //     {inputValue.trim() !== '' && (
// //       <img src={SendButton} alt="전송" onClick={handleSend} className="cursor-pointer border" />
// //     )}
// //   </div>
// // </div>

// {
//   /* <div className="mt-[8px] h-[78px] rounded-b-[15.7px] bg-[#EBE4E0] px-[20px] pt-[16px]">
//   <div className="h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-white">
//     <img
//       src={InputAddButton}
//       alt="input-add-button"
//       className="relative top-[11px] left-[10.5px] h-[15px] w-[15px] cursor-pointer"
//     />
//   </div>
//   <div className="ml-[10px] h-[36px] items-center">
//     <textarea
// value={inputValue}
// onChange={(e) => setInputValue(e.target.value)}
// onKeyDown={handleKeyDown}
//       placeholder="메세지 입력"
//       className={`h-[36px] ${inputValue.trim() !== '' ? 'w-[236px]' : 'w-[279px]'} relative top-[-36px] left-[37px] resize-none rounded-[6px] border bg-white pr-[50px] pl-[12px] placeholder-[#BABCBE] outline-none`}
//     />
//     <img
//       src={Imoji}
//       alt="이모지"
//       className={`${inputValue.trim() !== '' ? 'left-[240px]' : 'left-[280px]'} relative top-[-73px] h-[24px] w-[24px] cursor-pointer`}
//     />
//   </div>
//   <div>
//     {inputValue.trim() !== '' && (
//       <img
//         src={SendButton}
//         alt="전송"
//         onClick={handleSend}
//         className={`relative top-[-70px] left-[295px] h-[32px] w-[32px] cursor-pointer`}
//       />
//     )}
//   </div>
// </div> */
// }

import { useState, useRef, useEffect } from 'react';
import { MY_ID } from '@/type/ChatType.types';
import { useChat } from '@/hooks/useChat';
import InputAddButton from '@/assets/svgs/chat/input-add-button.svg';
import Imoji from '@/assets/svgs/chat/imoji.svg';
import SendButton from '@/assets/svgs/chat/send-button.svg';

const ChattingContextInput = () => {
  const { setMessages } = useChat();
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 입력될 때마다 높이 자동 조절
  const adjustHeight = () => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;

    // CSS box-sizing이 border-box라고 가정
    const lineHeight = 21; // 한 줄 글자 높이(px)
    const padding = 16; // 위아래 패딩 합(px)
    const minHeight = lineHeight + padding;

    textarea.style.height = `${minHeight}px`; // 먼저 최소 높이로 초기화
    textarea.style.overflowY = 'hidden'; // 스크롤 방지

    if (textarea.scrollHeight > minHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞춰 늘리기
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustHeight(); // 글자 입력될 때마다 자동 높이 조절
  };

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
    if (textareaRef.current) {
      textareaRef.current.style.height = '36px'; // 초기 높이로 리셋
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        // Enter 단독 → 전송
        e.preventDefault();
        handleSend();
      }
      // Shift+Enter → 기본 줄바꿈 동작 그대로
    }
  };

  useEffect(() => {
    adjustHeight(); // 처음 렌더 시 높이 맞춤
  }, []);

  return (
    <div className="mt-[4px] flex items-end gap-2 rounded-b-[15.7px] bg-[#EBE4E0] px-[20px] py-[17px]">
      <div className="relative bottom-[7px] flex h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-white">
        <img src={InputAddButton} alt="추가" className="h-[15px] w-[15px] cursor-pointer" />
      </div>

      <div className="relative flex-1">
        <div>
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="메세지 입력"
            className="box-border max-h-[127px] w-full resize-none overflow-hidden rounded-[6px] bg-white px-3 py-2 pr-[45px] leading-[21.15px] outline-none"
          />
        </div>
        <img
          src={Imoji}
          alt="이모지"
          className="absolute right-3 bottom-[1px] h-6 w-6 -translate-y-1/2 cursor-pointer"
        />
      </div>

      {inputValue.trim() && (
        <img
          src={SendButton}
          alt="전송"
          onClick={handleSend}
          className="relative bottom-[8px] h-8 w-8 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ChattingContextInput;
