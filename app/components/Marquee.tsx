"use client";

export default function Marquee({ text }: { text: string }) {
  // Split text to preserve emoticons from uppercase conversion
  const emoticonPattern = /(\(\/◕ヮ◕\)\/|\( ͡° ͜ʖ ͡°\)|:\)|:D|:\(|:P|;\)|:O|:\/|:S|:X|:Z)/;
  const parts = text.split(emoticonPattern);
  
  return (
    <div className="fixed top-[10vh] md:top-[12vh] left-0 right-0 overflow-hidden bg-yellow-400 text-black py-0 md:py-0.5 border-b-2 border-black z-10 group hover:bg-black hover:text-white transition-all duration-300 group-hover:scale-110 origin-top cursor-pointer">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-3 md:gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm md:text-base lg:text-lg font-bold font-brand tracking-tight transition-colors"
            >
              {parts.map((part, idx) => {
                const isEmoticon = emoticonPattern.test(part);
                return (
                  <span key={idx} className={isEmoticon ? "normal-case" : "uppercase"}>
                    {isEmoticon ? part : part.toUpperCase()}
                  </span>
                );
              })}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-6" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm md:text-base lg:text-lg font-bold font-brand tracking-tight transition-colors"
            >
              {parts.map((part, idx) => {
                const isEmoticon = emoticonPattern.test(part);
                return (
                  <span key={idx} className={isEmoticon ? "normal-case" : "uppercase"}>
                    {isEmoticon ? part : part.toUpperCase()}
                  </span>
                );
              })}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

