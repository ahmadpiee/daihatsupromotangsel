import React from 'react'
import Script from 'next/script'

const ChatID = process.env.NEXT_PUBLIC_CHAT_ID

const Chat: React.FC = () => {
  return (
    <Script
      id="crisp-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="${ChatID}";
      (function(){
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();`,
      }}
    />
  )
}

export default Chat
