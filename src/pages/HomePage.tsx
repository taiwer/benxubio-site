import React from "react";
import { motion } from "motion/react";
import {
  ChevronRight,
  Dna,
  Database,
  Microscope,
  FlaskConical,
  Globe,
  Activity,
} from "lucide-react";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { Page } from "../types";

export const FloatingBioElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(5)].map((_, i) => (
        <div
          key={`dna-${i}`}
          className="absolute text-accent/60 animate-float-dna"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${30 + Math.random() * 20}s`,
          }}
        >
          <Dna size={120 + Math.random() * 200} />
        </div>
      ))}
      {[...Array(6)].map((_, i) => (
        <div
          key={`hex-${i}`}
          className="absolute border border-sunrise/60 rounded-xl animate-float-hex"
          style={{
            width: 100 + i * 40,
            height: 110 + i * 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundImage: `linear-gradient(120deg, rgba(16,185,129,0.25), transparent)`,
            animationDelay: `${i}s`,
            animationDuration: `${25 + i * 5}s`,
          }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <div
          key={`flask-${i}`}
          className="absolute text-accent/60 animate-float-flask"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${35 + Math.random() * 15}s`,
          }}
        >
          <FlaskConical size={80 + Math.random() * 100} />
        </div>
      ))}
    </div>
  );
};

export const ServiceCard = ({
  icon,
  title,
  description,
  items,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  delay?: number;
}) => (
  <div className="bg-primary/80 p-8 rounded-3xl border border-slate-200 hover:border-sunrise/40 transition-all group">
    <div className="text-sunrise mb-6 bg-sunrise/10 w-fit p-4 rounded-2xl group-hover:bg-sunrise group-hover:text-primary transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 mb-8">{description}</p>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
          <ChevronRight size={14} className="text-accent" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const WorkflowStep = ({
  num,
  title,
  desc,
  delay = 0,
}: {
  num: string;
  title: string;
  desc: string;
  delay?: number;
}) => (
  <div className="flex gap-6 items-start group">
    <span className="text-2xl font-bold text-accent/30 group-hover:text-accent transition-colors">
      {num}
    </span>
    <div>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  </div>
);

export const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <ParticleNetwork />

        {/* Decorative Side Elements - Colorful Ribbons */}
        <div className="absolute top-0 left-0 w-64 h-full pointer-events-none opacity-30">
          <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[70vh] bg-gradient-to-b from-accent/40 to-transparent blur-3xl transform -rotate-12 rounded-full"></div>
          <div className="absolute top-[30%] left-[-10%] w-[200px] h-[50vh] bg-gradient-to-t from-sunrise/40 to-transparent blur-3xl transform rotate-12 rounded-full"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-full pointer-events-none opacity-30">
          <div className="absolute top-[10%] right-[-10%] w-[400px] h-[60vh] bg-gradient-to-b from-sunrise/30 to-transparent blur-3xl transform rotate-45 rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-20%] w-[300px] h-[80vh] bg-gradient-to-t from-accent/30 to-transparent blur-3xl transform -rotate-45 rounded-full"></div>
        </div>

        {/* Abstract Biotech DNA/Strand Shapes */}
        <svg
          className="absolute right-[5%] top-[20%] w-64 h-64 text-accent/10 animate-[spin_60s_linear_infinite] pointer-events-none"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,50 Q25,20 50,50 T90,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path
            d="M10,50 Q25,80 50,50 T90,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>

        <svg
          className="absolute left-[5%] bottom-[15%] w-48 h-48 text-sunrise/10 animate-[spin_40s_linear_infinite_reverse] pointer-events-none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="10,5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2,4"
          />
        </svg>

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
              <span className="gradient-text glow-text-sunrise">
                点亮科研旭光
              </span>
            </h1>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed">
              本旭生物（Benxu Biotech）提供领先的“生信大数据分析 +
              前沿生物实验验证”一站式科研解决方案。我们协助您从海量原始数据中提取核心洞察，助力科研突破。
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setPage("services")}
                className="bg-sunrise text-primary hover:bg-slate-50 hover:text-sunrise px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-sunrise/20"
              >
                立即开启科研项目
              </button>
              <button
                onClick={() => setPage("about")}
                className="bg-transparent border border-sunrise text-sunrise hover:bg-sunrise/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                了解关于我们
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-accent uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-0.5 h-10 bg-gradient-to-b from-accent to-transparent animate-float-simple relative" />
        </div>
      </section>

      <div className="relative bg-dark">
        {/* Glow continuation from Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none" />

        {/* Floating tech nodes for cohesion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={`bg-node-${i}`}
              className={`absolute rounded-full border ${i % 2 === 0 ? "border-accent/15" : "border-sunrise/15"} animate-breathe`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 40}%`, // Keep nodes mainly in the second section (top 40% of the wrapper)
                width: `${Math.random() * 100 + 30}px`,
                height: `${Math.random() * 100 + 30}px`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <FloatingBioElements />

        {/* Core Services Preview */}
        <section className="py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                核心业务领域
              </h2>
              <div className="w-20 h-1.5 bg-sunrise mx-auto rounded-full mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                delay={0.1}
                icon={<Database className="w-10 h-10" />}
                title="生信科研服务"
                description="数据处理、组学分析、生信软件定制开发。从NGS到底层数据挖掘，全方位数字化分析。"
                items={["高通量测序分析", "多组学整合分析", "生信软件开发"]}
              />
              <ServiceCard
                delay={0.3}
                icon={<Microscope className="w-10 h-10" />}
                title="生物实验研发"
                description="细胞技术研发、工业酶制剂及医学试验验证。专业的干湿实验验证闭环服务。"
                items={["细胞技术应用", "工业酶制剂研发", "临床前研究"]}
              />
              <ServiceCard
                delay={0.5}
                icon={<Globe className="w-10 h-10" />}
                title="科研支撑供应"
                description="高端科研仪器销售、实验室耗材供应及进出口贸易服务。保障科研基础设施与全球资源配置。"
                items={["仪器设备销售", "科研耗材供应", "进出口贸易服务"]}
              />
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-32 relative z-10 border-t border-b border-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold mb-8">严谨的科研流程</h2>
                  <p className="text-slate-600 mb-12">
                    我们建立了一套标准化、闭环式的服务体系，确保每一个项目从初始方案设计到最终结果交付都具备极高的科学价值与严密性。
                  </p>
                </motion.div>

                <div className="space-y-6">
                  <WorkflowStep
                    delay={0.1}
                    num="01"
                    title="需求沟通"
                    desc="专业生信专家一对一深度对接，明确科研目标与痛点。"
                  />
                  <WorkflowStep
                    delay={0.2}
                    num="02"
                    title="方案设计"
                    desc="定制化实验设计与分析流程，科学预估结果与产出。"
                  />
                  <WorkflowStep
                    delay={0.3}
                    num="03"
                    title="实验/分析"
                    desc="高标准实验室操作与高性能计算集群数据产出。"
                  />
                  <WorkflowStep
                    delay={0.4}
                    num="04"
                    title="交付支持"
                    desc="详尽报告解读、学术图表制作及后续技术协助。"
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 relative"
              >
                <div className="aspect-square bg-accent/5 rounded-full border border-accent/20 flex items-center justify-center p-12">
                  <div className="w-full h-full border border-accent/40 rounded-full flex items-center justify-center relative spin-slow">
                    <Activity className="text-accent w-24 h-24 absolute top-0 -translate-y-1/2" />
                    <FlaskConical className="text-accent w-24 h-24 absolute right-0 translate-x-1/2" />
                    <Database className="text-accent w-24 h-24 absolute bottom-0 translate-y-1/2" />
                    <Dna className="text-accent w-24 h-24 absolute left-0 -translate-x-1/2" />
                    <div className="text-center">
                      <span className="text-4xl font-bold text-accent glow-text">
                        BENXU
                      </span>
                      <p className="text-accent/60 tracking-widest text-sm">
                        ECOSYSTEM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
