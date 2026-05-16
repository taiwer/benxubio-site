import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import config from "../config.json";

export const FloatingContact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showWechat, setShowWechat] = useState(false);
  const [showAI, setShowAI] = useState(false);

  const handleAIClick = () => {
    // Attempt to click Aliyun's Chat button wrapper or nested element
    const aliyunBtn = document.querySelector(
      "#appflow-chat-container > div:first-child",
    );
    if (aliyunBtn instanceof HTMLElement) {
      aliyunBtn.click();
    } else {
      // Fallback selector for Aliyun chat box container
      const alternateBtn = document.querySelector(".appflow-chatbot-box");
      if (alternateBtn instanceof HTMLElement) {
        alternateBtn.click();
      }
    }
  };

  return (
    <div className="fixed right-6 bottom-32 z-50 flex flex-col gap-4">
      {/* Phone */}
      <div className="relative flex items-center group">
        {showPhone && (
          <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-200 text-slate-800 font-medium whitespace-nowrap animate-in fade-in slide-in-from-right-4 duration-200">
            {config.contact.phone}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200 rotate-45"></div>
          </div>
        )}
        <button
          className="w-12 h-12 bg-white text-sunrise rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all text-accent"
          onMouseEnter={() => setShowPhone(true)}
          onMouseLeave={() => setShowPhone(false)}
        >
          <Phone fill="currentColor" size={24} />
        </button>
      </div>

      {/* WeChat */}
      <div className="relative flex items-center group">
        {showWechat && (
          <div className="absolute right-full mr-4 bg-white p-4 rounded-xl shadow-xl border border-slate-200 text-slate-800 font-medium flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-200">
            <span className="mb-2 whitespace-nowrap text-sm font-bold text-accent">
              {config.wechatName}
            </span>
            <div className="w-32 h-32 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
              <img
                src="/weixin.png"
                alt="WeChat QR Code"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200 rotate-45"></div>
          </div>
        )}
        <button
          className="w-12 h-12 bg-white text-sunrise rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all text-[#07C160]"
          onMouseEnter={() => setShowWechat(true)}
          onMouseLeave={() => setShowWechat(false)}
        >
          <MessageCircle fill="currentColor" size={24} />
        </button>
      </div>

      {/* AI Assistant */}
      <div className="relative flex items-center group">
        {showAI && (
          <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-200 text-slate-800 font-medium whitespace-nowrap animate-in fade-in slide-in-from-right-4 duration-200">
            AI智能客服
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200 rotate-45"></div>
          </div>
        )}
        <button
          className="w-12 h-12 bg-white text-sunrise rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all"
          onMouseEnter={() => setShowAI(true)}
          onMouseLeave={() => setShowAI(false)}
          onClick={handleAIClick}
        >
          <span
            className="font-bold text-xl text-sunrise"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            AI
          </span>
        </button>
      </div>
    </div>
  );
};
