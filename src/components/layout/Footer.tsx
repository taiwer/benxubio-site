import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="relative bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden">
    {/* Background Decorations for Footer */}
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute -top-[50%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-sunrise/10 to-transparent blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-transparent blur-3xl rounded-full"></div>
    </div>

    {/* SVG Biotech Watermark */}
    <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none">
      <svg
        width="300"
        height="300"
        viewBox="0 0 100 100"
        className="animate-[spin_40s_linear_infinite]"
      >
        <path
          d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M50 10 L50 50 M10 30 L50 50 M90 30 L50 50"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-tr from-accent to-sunrise rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl font-serif italic">
                B
              </span>
            </div>
            <span className="text-2xl font-bold tracking-tight">本旭生物</span>
          </div>
          <p className="text-slate-800 text-lg max-w-md mb-10 leading-relaxed font-medium">
            引领生命科学研究新范式。通过卓越的生信分析技术与专业实验室研发服务，协助科研工作者解锁生命之奥秘。
          </p>
          <div className="flex space-x-10 text-sm font-medium text-slate-700 mb-6 font-mono p-4 bg-slate-100/50 rounded-2xl border border-slate-200 inline-flex">
            <div className="flex items-center">
              <span className="w-2.5 h-2.5 bg-accent rounded-full mr-3 shadow-[0_0_8px_rgba(2,132,199,0.6)] animate-pulse"></span>
              实验资质认证已核验
            </div>
            <div className="flex items-center">
              <span className="w-2.5 h-2.5 bg-sunrise rounded-full mr-3 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              24H 生信算力集群在线
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-8 tracking-widest text-sm">
            快速资源
          </h4>
          <ul className="space-y-4 text-slate-600 text-sm">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                技术服务分类
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                进出口贸易支撑
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                实验合作申请
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                数据安全协议
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-8 tracking-widest text-sm">
            联络中心
          </h4>
          <ul className="space-y-4 text-slate-600 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" /> 021-XXXX-XXXX
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" /> contact@benxubio.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-accent mt-1" />{" "}
              上海市浦东新区张江高科技园区
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
        <div className="flex gap-6">
          <span>ICP备 2024050607号</span>
          <span>隐私权限管理</span>
        </div>
        <p>&copy; 2024 本旭生物 Benxu Biotech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
