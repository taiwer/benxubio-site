import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Mail, Phone, MapPin, ChevronRight, Dna, Database, Microscope, FlaskConical, Globe, ShieldCheck, Activity } from 'lucide-react';
import { ParticleNetwork } from './components/ParticleNetwork';
import { BenxuParticleText } from './components/BenxuParticleText';

// --- Types ---
type Page = 'home' | 'services' | 'about';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setPage('home')}>
            <div className="w-10 h-10 bg-gradient-to-tr from-accent to-sunrise rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-black font-bold text-xl font-serif italic">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white">本旭生物</span>
              <span className="text-[10px] text-sunrise uppercase tracking-[0.2em] leading-none font-light">Benxu Biotech</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <NavLink active={currentPage === 'home'} onClick={() => setPage('home')}>首页</NavLink>
            <NavLink active={currentPage === 'services'} onClick={() => setPage('services')}>技术服务</NavLink>
            <NavLink active={currentPage === 'about'} onClick={() => setPage('about')}>关于我们</NavLink>
            <button className="px-6 py-2 bg-transparent border border-sunrise text-sunrise text-sm rounded-full hover:bg-sunrise hover:text-black transition-all duration-300 font-bold glow-border-sunrise">
              提交项目需求
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-accent p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary border-b border-emerald-900/30 px-6 py-8 space-y-6"
          >
            <MobileNavLink active={currentPage === 'home'} onClick={() => { setPage('home'); setIsOpen(false); }}>首页</MobileNavLink>
            <MobileNavLink active={currentPage === 'services'} onClick={() => { setPage('services'); setIsOpen(false); }}>技术服务</MobileNavLink>
            <MobileNavLink active={currentPage === 'about'} onClick={() => { setPage('about'); setIsOpen(false); }}>关于我们</MobileNavLink>
            <button className="w-full bg-accent text-primary px-5 py-4 rounded-xl font-bold">联系我们</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`text-sm font-medium tracking-widest transition-all relative py-2 ${active ? 'text-sunrise transition-colors' : 'text-gray-300 hover:text-sunrise'}`}
  >
    {children}
    {active && (
      <motion.div 
        layoutId="underline"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-sunrise"
      />
    )}
  </button>
);

const MobileNavLink = ({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`block w-full text-left text-lg font-medium transition-colors ${active ? 'text-accent' : 'text-gray-300'}`}
  >
    {children}
  </button>
);

const Footer = () => (
  <footer className="relative bg-primary/40 backdrop-blur-xl border-t border-emerald-900/30 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-tr from-accent to-sunrise rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl font-serif italic">B</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">本旭生物</span>
          </div>
          <p className="text-emerald-100/60 max-w-sm mb-10 leading-relaxed">
            引领生命科学研究新范式。通过卓越的生信分析技术与专业实验室研发服务，协助科研工作者解锁生命之奥秘。
          </p>
          <div className="flex space-x-10 text-xs text-emerald-500/80 mb-6">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              实验资质认证已核验
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-sunrise rounded-full mr-2"></span>
              24H 生信算力集群在线
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-8 tracking-widest text-sm">快速资源</h4>
          <ul className="space-y-4 text-emerald-100/50 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">技术服务分类</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">进出口贸易支撑</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">实验合作申请</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">数据安全协议</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-8 tracking-widest text-sm">联络中心</h4>
          <ul className="space-y-4 text-emerald-100/50 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} className="text-accent" /> 021-XXXX-XXXX</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /> contact@benxubio.com</li>
            <li className="flex items-start gap-3"><MapPin size={16} className="text-accent mt-1" /> 上海市浦东新区张江高科技园区</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-emerald-900/20 flex flex-col md:flex-row justify-between items-center text-emerald-500/60 text-xs gap-4">
        <div className="flex gap-6">
          <span>ICP备 2024050607号</span>
          <span>隐私权限管理</span>
        </div>
        <p>&copy; 2024 本旭生物 Benxu Biotech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <ParticleNetwork />
        
        {/* Sunrise Halo Decoration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] sunrise-glow-radial opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              探索生命本源 <br />
              <span className="gradient-text glow-text-sunrise">点亮科研旭光</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              本旭生物（Benxu Biotech）提供领先的“生信大数据分析 + 前沿生物实验验证”一站式科研解决方案。我们协助您从海量原始数据中提取核心洞察，助力科研突破。
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setPage('services')}
                className="bg-sunrise text-primary hover:bg-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-sunrise/20"
              >
                立即开启科研项目
              </button>
              <button 
                onClick={() => setPage('about')}
                className="bg-transparent border border-sunrise text-sunrise hover:bg-sunrise/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                了解关于我们
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Animated indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <span className="text-xs text-accent uppercase tracking-widest">Scroll to explore</span>
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-0.5 h-10 bg-gradient-to-b from-accent to-transparent" 
           />
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-32 relative bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">核心业务领域</h2>
            <div className="w-20 h-1.5 bg-sunrise mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Database className="w-10 h-10" />}
              title="生信科研服务"
              description="数据处理、组学分析、生信软件定制开发。从NGS到底层数据挖掘，全方位数字化分析。"
              items={['高通量测序分析', '多组学整合分析', '生信软件开发']}
            />
            <ServiceCard 
              icon={<Microscope className="w-10 h-10" />}
              title="生物实验研发"
              description="细胞技术研发、工业酶制剂及医学试验验证。专业的干湿实验验证闭环服务。"
              items={['细胞技术应用', '工业酶制剂研发', '临床前研究']}
            />
            <ServiceCard 
              icon={<Globe className="w-10 h-10" />}
              title="科研支撑供应"
              description="高端科研仪器销售、实验室耗材供应及进出口贸易服务。保障科研基础设施与全球资源配置。"
              items={['仪器设备销售', '科研耗材供应', '进出口贸易服务']}
            />
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-32 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-8">严谨的科研流程</h2>
              <p className="text-gray-400 mb-12">
                我们建立了一套标准化、闭环式的服务体系，确保每一个项目从初始方案设计到最终结果交付都具备极高的科学价值与严密性。
              </p>
              
              <div className="space-y-6">
                <WorkflowStep num="01" title="需求沟通" desc="专业生信专家一对一深度对接，明确科研目标与痛点。" />
                <WorkflowStep num="02" title="方案设计" desc="定制化实验设计与分析流程，科学预估结果与产出。" />
                <WorkflowStep num="03" title="实验/分析" desc="高标准实验室操作与高性能计算集群数据产出。" />
                <WorkflowStep num="04" title="交付支持" desc="详尽报告解读、学术图表制作及后续技术协助。" />
              </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="aspect-square bg-accent/5 rounded-full border border-accent/20 flex items-center justify-center p-12">
                  <div className="w-full h-full border border-accent/40 rounded-full flex items-center justify-center relative spin-slow">
                    <Activity className="text-accent w-24 h-24 absolute top-0 -translate-y-1/2" />
                    <FlaskConical className="text-accent w-24 h-24 absolute right-0 translate-x-1/2" />
                    <Database className="text-accent w-24 h-24 absolute bottom-0 translate-y-1/2" />
                    <Dna className="text-accent w-24 h-24 absolute left-0 -translate-x-1/2" />
                    <div className="text-center">
                       <span className="text-4xl font-bold text-accent glow-text">BENXU</span>
                       <p className="text-accent/60 tracking-widest text-sm">ECOSYSTEM</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, items }: { icon: React.ReactNode, title: string, description: string, items: string[] }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-primary/50 p-8 rounded-3xl border border-white/10 hover:border-sunrise/40 transition-all group backdrop-blur-md"
  >
    <div className="text-sunrise mb-6 bg-sunrise/10 w-fit p-4 rounded-2xl group-hover:bg-sunrise group-hover:text-primary transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 mb-8">{description}</p>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
          <ChevronRight size={14} className="text-accent" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const WorkflowStep = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className="flex gap-6 items-start group">
    <span className="text-2xl font-bold text-accent/30 group-hover:text-accent transition-colors">{num}</span>
    <div>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  </div>
);

const DataMonitor = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const processNames = [
    "ALIGNING GENOMIC SEQUENCES...",
    "IDENTIFYING PROTEIN STRUCTURES...",
    "OPTIMIZING DATA PIPELINES...",
    "INTEGRATING MULTI-OMICS DATA...",
    "SIMULATING CELLULAR INTERACTIONS...",
    "ANALYZING VARIANT FREQUENCIES...",
    "CALIBRATING WET-LAB INSTRUMENTS...",
    "PROCESSING CLOUD COMPUTE THREADS..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextLog = processNames[Math.floor(Math.random() * processNames.length)];
      setLogs(prev => [nextLog, ...prev].slice(0, 5));
      setProgress(Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40 w-72 md:w-80 glass-panel p-4 rounded-2xl border-sunrise/30 text-[10px] font-mono hidden lg:block overflow-hidden">
      <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-sunrise rounded-full animate-pulse"></div>
           <span className="text-sunrise font-bold uppercase tracking-widest">Live Research Monitor</span>
        </div>
        <span className="text-gray-500">v4.0.2-BENXU</span>
      </div>
      
      <div className="space-y-1.5 mb-4">
        {logs.length === 0 ? (
          <div className="text-gray-600 italic">Initializing systems...</div>
        ) : (
          logs.map((log, i) => (
            <motion.div 
              key={log + i} 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1 - i * 0.2, x: 0 }}
              className={i === 0 ? "text-accent" : "text-gray-500"}
            >
              {`> ${log}`}
            </motion.div>
          ))
        )}
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[8px] text-gray-500 uppercase">
          <span>Processing Threads</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-accent to-sunrise shadow-[0_0_10px_rgba(223,255,0,0.5)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 mt-3 gap-2 border-t border-white/10 pt-2 text-[8px] text-gray-500">
        <div>LATENCY: 14ms</div>
        <div>UPLINK: 4.8 GB/s</div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <DataMonitor />
      <section className="py-24 bg-gradient-to-b from-primary to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">全方位技术服务</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              整合干湿实验资源，将海量原始数据转化为精准结论。助力每一个科研灵感的落地。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Category 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-block px-4 py-1 rounded-full border border-sunrise text-sunrise text-sm font-bold mb-6 glow-border-sunrise">分类一</div>
               <h2 className="text-4xl font-bold mb-8">数字化生信服务类 <span className="text-sunrise text-2xl ml-2 font-light">Dry Lab</span></h2>
               <div className="space-y-4">
                 <ServiceDetailItem title="生信分析" items={['高通量测序数据处理', '多组学整合分析', '自然科学研究服务']} />
                 <ServiceDetailItem title="数字支持" items={['数据处理与存储支持', '大数据挖掘服务', '信息系统集成']} />
                 <ServiceDetailItem title="定制开发" items={['科研软件定制开发', '生信工具销售', '计算设备零售/批发']} />
               </div>
            </motion.div>
            <div className="relative group">
               <div className="absolute inset-0 bg-sunrise/20 blur-[100px] rounded-full group-hover:opacity-100 transition-opacity opacity-50"></div>
               <div className="relative glass-panel aspect-video rounded-3xl flex items-center justify-center border border-sunrise/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-sunrise/5 to-transparent"></div>
                  
                  {/* Digital Rain / Data Stream Effect */}
                  {[...Array(15)].map((_, i) => (
                    <div key={`stream-${i}`} className="absolute top-0 w-[1px] h-full" style={{ left: `${(i / 15) * 100}%` }}>
                      <motion.div
                        animate={{ y: [-100, 400] }}
                        transition={{ repeat: Infinity, duration: 1.5 + Math.random() * 2, delay: Math.random() * 2, ease: "linear" }}
                        className="w-full h-16 bg-gradient-to-b from-transparent via-sunrise to-transparent shadow-[0_0_8px_rgba(223,255,0,0.8)] opacity-60"
                      />
                    </div>
                  ))}

                  {/* Circular Radar Scan */}
                  <div className="absolute w-[180px] h-[180px] rounded-full border border-sunrise/10 overflow-hidden">
                      <motion.div 
                         animate={{ rotate: 360 }}
                         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                         style={{ transformOrigin: 'bottom right' }}
                         className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-sunrise/20 to-transparent"
                      />
                  </div>
                  <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-sunrise/20 animate-[spin_20s_linear_infinite]" />

                  <div className="relative flex flex-col items-center z-10 bg-dark/60 p-6 rounded-2xl backdrop-blur-sm border border-sunrise/20 border-b-sunrise/50 shadow-lg shadow-sunrise/10">
                    <div className="relative mb-4">
                      <Database className="text-sunrise w-16 h-16 drop-shadow-[0_0_15px_rgba(223,255,0,0.8)]" />
                      <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-sunrise rounded-full blur-xl -z-10"
                      />
                    </div>
                    <div className="flex gap-2">
                       {[0, 1, 2, 3].map(i => (
                         <div key={i} className="w-8 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              animate={{ x: [-32, 32] }} 
                              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2, ease: "linear" }}
                              className="w-full h-full bg-sunrise"
                            />
                         </div>
                       ))}
                    </div>
                  </div>

                  <Activity className="absolute bottom-10 left-10 text-accent outline-none stroke-[1.5] w-12 h-12">
                     <motion.animate 
                        attributeName="stroke-dasharray" 
                        values="0,100;100,0;0,100" 
                        dur="3s" 
                        repeatCount="indefinite" 
                     />
                  </Activity>
               </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
               <div className="inline-block px-4 py-1 rounded-full border border-accent text-accent text-sm font-bold mb-6 glow-border">分类二</div>
               <h2 className="text-4xl font-bold mb-8">生物医学研发类 <span className="text-accent text-2xl ml-2 font-light">Wet Lab</span></h2>
               <div className="space-y-4">
                 <ServiceDetailItem title="核心研发" items={['细胞技术研发与应用', '医学研究试验发展', '工业酶制剂研发']} />
                 <ServiceDetailItem title="材料开发" items={['生物基材料技术研发', '生物化工产品研发']} />
                 <ServiceDetailItem title="转化服务" items={['技术转让与交流', '学术翻译服务', '技术成果推广']} />
               </div>
            </motion.div>
            <div className="relative group md:order-1">
               <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full group-hover:opacity-100 transition-opacity opacity-50"></div>
               <div className="relative glass-panel aspect-video rounded-3xl flex items-center justify-center border border-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sunrise/20 to-transparent"></div>
                  
                  {/* Organic Cells / Bubbles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`bubble-${i}`}
                      animate={{
                        y: [0, -400],
                        x: [0, Math.random() * 60 - 30, 0],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 8 + Math.random() * 6,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: Math.random() * 5
                      }}
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        bottom: '-50px',
                        width: `${Math.random() * 40 + 10}px`,
                        height: `${Math.random() * 40 + 10}px`,
                      }}
                      className="absolute rounded-full border border-accent/40 bg-gradient-to-tr from-accent/10 to-transparent backdrop-blur-md"
                    />
                  ))}

                  <div className="relative flex flex-col items-center z-10">
                    <div className="relative">
                       <FlaskConical className="text-accent w-28 h-28 mb-2 drop-shadow-[0_0_20px_rgba(57,255,20,0.6)]" />
                       <motion.div 
                         initial={{ height: 0 }}
                         animate={{ height: ['0%', '60%', '20%', '80%', '0%'] }}
                         transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                         className="absolute bottom-[20%] left-[30%] right-[30%] bg-accent/30 rounded-full blur-[2px] z-10"
                       />
                    </div>
                    <motion.div 
                      animate={{ y: [0, -20, -40], opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute top-0 w-4 h-4 bg-sunrise rounded-full blur-[2px] shadow-[0_0_15px_rgba(223,255,0,0.8)]"
                    />
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px]"
                  >
                     <Dna className="absolute inset-0 text-sunrise/10 w-full h-full" />
                  </motion.div>
                  
                  <div className="absolute top-6 left-8 w-20 h-20 rounded-full border border-accent/30 flex items-center justify-center bg-accent/5 backdrop-blur-md shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                    <Microscope className="text-accent w-10 h-10 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
                  </div>
               </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-block px-4 py-1 rounded-full border border-sunrise text-sunrise text-sm font-bold mb-6 glow-border-sunrise">分类三</div>
               <h2 className="text-4xl font-bold mb-8">科研保障与供应类 <span className="text-sunrise text-2xl ml-2 font-light">Ecosystem</span></h2>
               <div className="space-y-4">
                 <ServiceDetailItem title="实验保障" items={['第一类医疗器械销售', '精密光学/玻璃仪器', '实验室笼具/垫料供应']} />
                 <ServiceDetailItem title="基础配套" items={['塑料制品定制销售', '办公设备及耗材', '电子产品供应']} />
                 <ServiceDetailItem title="国际贸易" items={['货物进出口业务', '技术引进与外输']} />
               </div>
            </motion.div>
            <div className="relative group">
               <div className="absolute inset-0 bg-sunrise/10 blur-[120px] rounded-full group-hover:opacity-100 transition-opacity opacity-40"></div>
               <div className="relative glass-panel aspect-video rounded-3xl flex items-center justify-center border border-sunrise/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sunrise/10 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.15]"></div>

                  {/* Satellite Points connected to center */}
                  {[...Array(6)].map((_, i) => (
                      <div key={`sat-line-${i}`} className="absolute top-1/2 left-1/2 w-[200px] origin-left border-t border-dashed border-sunrise/20" style={{ transform: `rotate(${i * 60}deg)` }}>
                          <motion.div 
                             animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                             transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                             className="absolute top-[-2px] w-4 h-[3px] bg-sunrise rounded-full shadow-[0_0_8px_#DFFF00]"
                          />
                      </div>
                  ))}

                  {/* Orbital Nodes */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`orbit-${i}`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                      style={{ width: `${140 + i * 50}px`, height: `${140 + i * 50}px` }}
                      className="absolute border border-sunrise/10 rounded-full"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#DFFF00]" 
                      />
                    </motion.div>
                  ))}

                  <div className="relative z-10">
                    <Globe className="text-sunrise w-28 h-28 animate-[spin_30s_linear_infinite] drop-shadow-[0_0_20px_rgba(223,255,0,0.5)]" />
                    <motion.div 
                      animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute inset-0 bg-sunrise/20 blur-xl rounded-full -z-10" 
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceDetailItem = ({ title, items }: { title: string, items: string[] }) => (
  <div className="border-b border-white/5 py-6">
    <h4 className="text-xl font-bold mb-3 text-accent">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className="bg-white/5 px-3 py-1 rounded-md text-sm text-gray-400">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-primary to-dark relative overflow-hidden">
        {/* Animated cell background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           {[...Array(15)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute rounded-full border border-accent/30 flex items-center justify-center"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 width: `${Math.random() * 60 + 30}px`,
                 height: `${Math.random() * 60 + 30}px`,
               }}
               animate={{
                 y: [Math.random() * 50 - 25, Math.random() * -50 + 25],
                 x: [Math.random() * 50 - 25, Math.random() * -50 + 25],
                 opacity: [0.1, 0.4, 0.1],
                 scale: [0.8, 1.2, 0.8],
               }}
               transition={{
                 duration: Math.random() * 8 + 5,
                 repeat: Infinity,
                 ease: "linear"
               }}
             />
           ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <BenxuParticleText />
                
                <p className="text-xl text-gray-300 mb-6 font-medium leading-relaxed mt-4">
                  本旭生物 (Benxu Biotech) ，立足于生命科学之本，深耕“生信大数据+前沿生物实验”双驱动领域。我们坚持以数据洞察生命的底层逻辑，用实验验证科研的真实价值。
                </p>
                <div className="space-y-8 mt-12">
                  <div className="border-l-4 border-accent pl-6 group relative">
                    <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent animate-ping opacity-50"></div>
                    <div className="absolute -left-1 top-2.5 w-2 h-2 rounded-full bg-white"></div>
                    <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-2">
                       <Database className="text-accent w-6 h-6" /> 
                       数据驱动发现
                    </h3>
                    <p className="text-gray-400">掌握海量生物信息与核心处理算法，为复杂的科研假设提供精准、高效的数据支撑。</p>
                  </div>
                  <div className="border-l-4 border-sunrise pl-6 group relative">
                    <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-sunrise animate-ping opacity-50"></div>
                    <div className="absolute -left-1 top-2.5 w-2 h-2 rounded-full bg-white"></div>
                    <h3 className="text-2xl font-bold mb-2 text-sunrise flex items-center gap-2">
                       <FlaskConical className="text-sunrise w-6 h-6" />
                       实验验证真理
                    </h3>
                    <p className="text-gray-400">配备高标准实验室及临床研究支持工具，严谨执行从细胞开发到临床前的系列验证流程。</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative">
                 <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full"></div>
                 <div className="grid grid-cols-2 gap-4 relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-accent/5 border border-accent/20 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group"
                    >
                       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/microbial-mat.png')]"></div>
                       <Dna size={60} className="text-accent mb-4 group-hover:scale-110 transition-transform duration-500" />
                       <span className="font-bold text-lg text-white">基因构筑</span>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-3xl flex items-center justify-center p-6 text-primary font-bold text-3xl leading-tight relative overflow-hidden backdrop-blur-sm"
                    >
                       <div className="absolute right-0 top-0 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                       <span className="text-white relative z-10 drop-shadow-md">生信分析<br/>核心链</span>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-dark border border-sunrise/40 rounded-3xl flex items-center justify-center font-bold text-5xl text-sunrise relative overflow-hidden"
                    >
                       <Microscope className="absolute inset-0 m-auto text-sunrise/10 w-full h-full p-4" />
                       <span className="relative z-10 glow-text-sunrise text-center">细胞<br/>工艺</span>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-gray-800 rounded-3xl overflow-hidden relative group"
                    >
                       <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/0 mix-blend-overlay transition-all duration-500 z-10"></div>
                       <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400" alt="lab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </motion.div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold mb-4">企业资质与保障</h2>
             <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <BadgeCard icon={<Globe />} title="货物进出口证" />
             <BadgeCard icon={<ShieldCheck />} title="一类器械备案" />
             <BadgeCard icon={<Activity />} title="软著专利证书" />
             <BadgeCard icon={<FlaskConical />} title="高标准实验室" />
           </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-300">
           <h2 className="text-3xl font-bold text-white mb-8">联系我们合作</h2>
           <p className="mb-12">
             无论您在生信分析上有任何疑难杂症，还是需要高水准的湿实验支持，本旭生物专家团队期待为您提供专业、可靠、快速的响应方案。
           </p>
           <button className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl shadow-lg shadow-accent/20">
             联系技术专家
           </button>
        </div>
      </section>
    </div>
  );
};

const BadgeCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="bg-white/5 p-8 rounded-3xl text-center border border-white/5 hover:border-accent/30 transition-all group">
    <div className="mb-4 text-accent flex justify-center transform group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 48 })}
    </div>
    <h4 className="font-bold">{title}</h4>
  </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden selection:bg-accent selection:text-primary">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage setPage={setPage} />
            </motion.div>
          )}
          {page === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ServicesPage />
            </motion.div>
          )}
          {page === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      {/* Scroll to Top button could go here */}
    </div>
  );
}
