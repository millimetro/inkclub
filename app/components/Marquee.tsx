"use client";

export default function Marquee({ text }: { text: string }) {
  // Split text to preserve emoticons from uppercase conversion
  const emoticonPattern = /(\(\/◕ヮ◕\)\/|\( ͡° ͜ʖ ͡°\)|:\)|:D|:\(|:P|;\)|:O|:\/|:S|:X|:Z)/;
  const parts = text.split(emoticonPattern);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 overflow-hidden bg-yellow-400 text-black py-1 md:py-1.5 border-t-2 border-black z-10 group hover:bg-black hover:text-white transition-all duration-300 group-hover:scale-110 origin-bottom cursor-pointer">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-4 md:gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-brand tracking-tight transition-colors"
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
        <div className="flex items-center gap-4 md:gap-8" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-brand tracking-tight transition-colors"
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

