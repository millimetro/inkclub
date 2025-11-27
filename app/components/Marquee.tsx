"use client";

export default function Marquee({ text }: { text: string }) {
  // Split text to preserve emoticons from uppercase conversion
  const emoticonPattern = /(\(\/◕ヮ◕\)\/|\( ͡° ͜ʖ ͡°\)|:\)|:D|:\(|:P|;\)|:O|:\/|:S|:X|:Z)/;
  const parts = text.split(emoticonPattern);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 overflow-hidden bg-yellow-400 text-black py-2 border-t-2 border-black z-10 group">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="text-2xl font-bold font-brand tracking-tight transition-colors"
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
        <div className="flex items-center gap-8" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="text-2xl font-bold font-brand tracking-tight transition-colors"
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

