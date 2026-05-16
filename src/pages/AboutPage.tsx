import React from "react";
import { motion } from "motion/react";
import {
  Dna,
  Database,
  Microscope,
  FlaskConical,
  Globe,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { BenxuParticleText } from "../components/BenxuParticleText";

export const BadgeCard = ({
  icon,
  title,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  delay?: number;
}) => (
  <div className="bg-slate-100 p-8 rounded-3xl text-center border border-slate-100 hover:border-accent/30 transition-all group">
    <div className="mb-4 text-accent flex justify-center transform group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 48 })}
    </div>
    <h4 className="font-bold">{title}</h4>
  </div>
);

export const AboutPage = ({
  onRequestStart,
}: {
  onRequestStart?: () => void;
}) => {
  return (
    <div className="pt-20 bg-gradient-to-b from-primary to-dark relative overflow-hidden">
      {/* Animated cell background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-accent/30 flex items-center justify-center animate-breathe"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              animationDuration: `${Math.random() * 8 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <BenxuParticleText />

              <p className="text-xl text-slate-700 mb-6 font-medium leading-relaxed mt-4">
                本旭生物 (Benxu Biotech)
                ，立足于生命科学之本，深耕“生信大数据+前沿生物实验”双驱动领域。我们坚持以数据洞察生命的底层逻辑，用实验验证科研的真实价值。
              </p>
              <div className="space-y-8 mt-12">
                <div className="border-l-4 border-accent pl-6 group relative">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent animate-ping opacity-50"></div>
                  <div className="absolute -left-1 top-2.5 w-2 h-2 rounded-full bg-white"></div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 flex items-center gap-2">
                    <Database className="text-accent w-6 h-6" />
                    数据驱动发现
                  </h3>
                  <p className="text-slate-600">
                    掌握海量生物信息与核心处理算法，为复杂的科研假设提供精准、高效的数据支撑。
                  </p>
                </div>
                <div className="border-l-4 border-sunrise pl-6 group relative">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-sunrise animate-ping opacity-50"></div>
                  <div className="absolute -left-1 top-2.5 w-2 h-2 rounded-full bg-white"></div>
                  <h3 className="text-2xl font-bold mb-2 text-sunrise flex items-center gap-2">
                    <FlaskConical className="text-sunrise w-6 h-6" />
                    实验验证真理
                  </h3>
                  <p className="text-slate-600">
                    配备高标准实验室及临床研究支持工具，严谨执行从细胞开发到临床前的系列验证流程。
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
              <div
                className="absolute -inset-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(2,132,199,0.05) 0%, transparent 70%)",
                }}
              ></div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="aspect-square bg-accent/5 border border-accent/20 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform">
                  <Dna
                    size={60}
                    className="text-accent mb-4 group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="font-bold text-lg text-slate-900">
                    基因构筑
                  </span>
                </div>

                <div className="aspect-square bg-gradient-to-br from-accent/40 to-transparent border border-accent/30 rounded-3xl flex items-center justify-center p-6 text-slate-900 font-bold text-3xl leading-tight relative overflow-hidden hover:scale-105 transition-transform bg-primary">
                  <div
                    className="absolute right-0 top-0 w-24 h-24 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(2,132,199,0.3) 0%, transparent 70%)",
                    }}
                  ></div>
                  <span className="text-slate-900 relative z-10 drop-shadow-md">
                    生信分析
                    <br />
                    核心链
                  </span>
                </div>

                <div className="aspect-square bg-dark border border-sunrise/40 rounded-3xl flex items-center justify-center font-bold text-5xl text-sunrise relative overflow-hidden hover:scale-105 transition-transform">
                  <Microscope className="absolute inset-0 m-auto text-sunrise/10 w-full h-full p-4" />
                  <span className="relative z-10 glow-text-sunrise text-center">
                    细胞
                    <br />
                    工艺
                  </span>
                </div>

                <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/0 transition-all duration-500 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400"
                    alt="lab"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              企业资质与保障
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <BadgeCard delay={0.1} icon={<Globe />} title="货物进出口证" />
            <BadgeCard
              delay={0.2}
              icon={<ShieldCheck />}
              title="一类器械备案"
            />
            <BadgeCard delay={0.3} icon={<Activity />} title="软著专利证书" />
            <BadgeCard
              delay={0.4}
              icon={<FlaskConical />}
              title="高标准实验室"
            />
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-primary/20 bg-opacity-50 backdrop-blur-sm mt-12 border-t border-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-700"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            联系我们合作
          </h2>
          <p className="mb-12">
            无论您在生信分析上有任何疑难杂症，还是需要高水准的湿实验支持，本旭生物专家团队期待为您提供专业、可靠、快速的响应方案。
          </p>
          <button
            onClick={onRequestStart}
            className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl shadow-lg shadow-accent/20 transition-transform hover:scale-105"
          >
            联系技术专家
          </button>
        </motion.div>
      </section>
    </div>
  );
};
