import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Database, Microscope, Globe, Activity, FlaskConical, Dna } from "lucide-react";

export const DataMonitor = () => {
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
    "PROCESSING CLOUD COMPUTE THREADS...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextLog =
        processNames[Math.floor(Math.random() * processNames.length)];
      setLogs((prev) => [nextLog, ...prev].slice(0, 5));
      setProgress(Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40 w-72 md:w-80 glass-panel p-4 rounded-2xl border-sunrise/30 text-[10px] font-mono hidden lg:block overflow-hidden">
      <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-sunrise rounded-full animate-pulse"></div>
          <span className="text-sunrise font-bold uppercase tracking-widest">
            Live Research Monitor
          </span>
        </div>
        <span className="text-slate-500">v4.0.2-BENXU</span>
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
              className={i === 0 ? "text-accent" : "text-slate-500"}
            >
              {`> ${log}`}
            </motion.div>
          ))
        )}
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[8px] text-slate-500 uppercase">
          <span>Processing Threads</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            animate={{ scaleX: progress / 100 }}
            style={{ transformOrigin: "left" }}
            className="w-full h-full bg-gradient-to-r from-accent to-sunrise shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 mt-3 gap-2 border-t border-slate-200 pt-2 text-[8px] text-slate-500">
        <div>LATENCY: 14ms</div>
        <div>UPLINK: 4.8 GB/s</div>
      </div>
    </div>
  );
};

export const ServiceDetailItem = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="border-b border-slate-100 py-6">
    <h4 className="text-xl font-bold mb-3 text-accent">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className="bg-slate-100 px-3 py-1 rounded-md text-sm text-slate-600"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export const ServicesPage = () => {
  return (
    <div className="pt-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Floating Cellular/Tech Nodes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`service-bg-${i}`}
            className={`absolute rounded-full border flex items-center justify-center animate-breathe ${i % 2 === 0 ? "border-accent/20" : "border-sunrise/20"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              animationDuration: `${Math.random() * 8 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating connection lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-slide-fast"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: "1px",
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <DataMonitor />

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              全方位技术服务
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              整合干湿实验资源，将海量原始数据转化为精准结论。助力每一个科研灵感的落地。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Category 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-full border border-sunrise text-sunrise text-sm font-bold mb-6 glow-border-sunrise">
                分类一
              </div>
              <h2 className="text-4xl font-bold mb-8">
                数字化生信服务类{" "}
                <span className="text-sunrise text-2xl ml-2 font-light">
                  Dry Lab
                </span>
              </h2>
              <div className="space-y-4">
                <ServiceDetailItem
                  title="生信分析"
                  items={[
                    "高通量测序数据处理",
                    "多组学整合分析",
                    "自然科学研究服务",
                  ]}
                />
                <ServiceDetailItem
                  title="数字支持"
                  items={[
                    "数据处理与存储支持",
                    "大数据挖掘服务",
                    "信息系统集成",
                  ]}
                />
                <ServiceDetailItem
                  title="定制开发"
                  items={[
                    "科研软件定制开发",
                    "生信工具销售",
                    "计算设备零售/批发",
                  ]}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-full group-hover:opacity-100 transition-opacity opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
                }}
              ></div>
              <div className="relative glass-panel aspect-video rounded-3xl flex items-center justify-center border border-sunrise/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sunrise/5 to-transparent"></div>

                {/* Digital Rain / Data Stream Effect */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={`stream-${i}`}
                    className="absolute top-0 w-[1px] h-full"
                    style={{ left: `${(i / 15) * 100}%` }}
                  >
                    <div
                      className="w-full h-16 bg-gradient-to-b from-transparent via-sunrise to-transparent opacity-60 animate-flash-scan"
                      style={{
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1.5 + Math.random() * 2}s`,
                      }}
                    />
                  </div>
                ))}

                {/* Circular Radar Scan */}
                <div className="absolute w-[180px] h-[180px] rounded-full border border-sunrise/10 overflow-hidden">
                  <div
                    style={{
                      transformOrigin: "bottom right",
                      animationDuration: "3s",
                    }}
                    className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-sunrise/20 to-transparent animate-orbit"
                  />
                </div>
                <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-sunrise/20 animate-[spin_20s_linear_infinite]" />

                <div className="relative flex flex-col items-center z-10 bg-dark/95 p-6 rounded-2xl border border-sunrise/20 border-b-sunrise/50 shadow-lg shadow-sunrise/10">
                  <div className="relative mb-4">
                    <Database className="text-sunrise w-16 h-16" />
                    <div
                      className="absolute -inset-4 rounded-full -z-10 animate-glow-pulse"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(16,185,129,0.6) 0%, transparent 70%)",
                        animationDuration: "2s",
                      }}
                    />
                  </div>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-1.5 bg-slate-200 rounded-full overflow-hidden relative"
                      >
                        <div
                          className="absolute top-0 left-0 w-full h-full bg-sunrise animate-slide-fast"
                          style={{
                            animationDuration: "1.5s",
                            animationDelay: `${i * 0.2}s`,
                          }}
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
            </motion.div>
          </div>

          {/* Category 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <div className="inline-block px-4 py-1 rounded-full border border-accent text-accent text-sm font-bold mb-6 glow-border">
                分类二
              </div>
              <h2 className="text-4xl font-bold mb-8">
                生物医学研发类{" "}
                <span className="text-accent text-2xl ml-2 font-light">
                  Wet Lab
                </span>
              </h2>
              <div className="space-y-4">
                <ServiceDetailItem
                  title="核心研发"
                  items={[
                    "细胞技术研发与应用",
                    "医学研究试验发展",
                    "工业酶制剂研发",
                  ]}
                />
                <ServiceDetailItem
                  title="材料开发"
                  items={["生物基材料技术研发", "生物化工产品研发"]}
                />
                <ServiceDetailItem
                  title="转化服务"
                  items={["技术转让与交流", "学术翻译服务", "技术成果推广"]}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group md:order-1"
            >
              <div
                className="absolute inset-0 rounded-full group-hover:opacity-100 transition-opacity opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(2,132,199,0.1) 0%, transparent 70%)",
                }}
              ></div>
              <div className="relative glass-panel aspect-video rounded-3xl flex items-center justify-center border border-accent/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-sunrise/20 to-transparent"></div>

                {/* Organic Cells / Bubbles */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`bubble-${i}`}
                    className="absolute rounded-full border border-accent/40 bg-gradient-to-tr from-accent/10 to-transparent animate-breathe"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      bottom: "-50px",
                      width: `${Math.random() * 40 + 10}px`,
                      height: `${Math.random() * 40 + 10}px`,
                      animationDuration: `${8 + Math.random() * 6}s`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}

                <div className="relative flex flex-col items-center z-10">
                  <div className="relative">
                    <FlaskConical className="text-accent w-28 h-28 mb-2" />
                    <div
                      className="absolute bottom-[20%] left-[30%] right-[30%] bg-accent/30 rounded-t-full z-10"
                      style={{ animation: "breathe 5s ease-in-out infinite" }}
                    />
                  </div>
                  <div
                    className="absolute top-0 w-6 h-6 rounded-full animate-float-simple"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(16,185,129,0.8) 0%, transparent 70%)",
                      animationDuration: "2s",
                    }}
                  />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] animate-[spin_40s_linear_infinite]">
                  <Dna className="absolute inset-0 text-sunrise/10 w-full h-full" />
                </div>

                <div className="absolute top-6 left-8 w-20 h-20 rounded-full border border-accent/30 flex items-center justify-center bg-accent/10 shadow-[0_0_15px_rgba(2,132,199,0.2)]">
                  <Microscope className="text-accent w-10 h-10 drop-shadow-[0_0_10px_rgba(2,132,199,0.5)]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Category 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-full border border-sunrise text-sunrise text-sm font-bold mb-6 glow-border-sunrise">
                分类三
              </div>
              <h2 className="text-4xl font-bold mb-8">
                科研保障与供应类{" "}
                <span className="text-sunrise text-2xl ml-2 font-light">
                  Ecosystem
                </span>
              </h2>
              <div className="space-y-4">
                <ServiceDetailItem
                  title="实验保障"
                  items={[
                    "第一类医疗器械销售",
                    "精密光学/玻璃仪器",
                    "实验室笼具/垫料供应",
                  ]}
                />
                <ServiceDetailItem
                  title="基础配套"
                  items={["塑料制品定制销售", "办公设备及耗材", "电子产品供应"]}
                />
                <ServiceDetailItem
                  title="国际贸易"
                  items={["货物进出口业务", "技术引进与外输"]}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-full group-hover:opacity-100 transition-opacity opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
                }}
              ></div>
              <div className="relative glass-panel aspect-video rounded-3xl flex items-center justify-center border border-sunrise/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sunrise/10 via-transparent to-transparent"></div>

                {/* Satellite Points connected to center */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`sat-line-${i}`}
                    className="absolute top-1/2 left-1/2 w-[200px] origin-left border-t border-dashed border-sunrise/20"
                    style={{ transform: `rotate(${i * 60}deg)` }}
                  >
                    <div
                      className="absolute top-[-2px] w-4 h-[3px] bg-sunrise rounded-full animate-data-flow"
                      style={{
                        animationDuration: "2s",
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  </div>
                ))}

                {/* Orbital Nodes */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`orbit-${i}`}
                    style={{
                      width: `${140 + i * 50}px`,
                      height: `${140 + i * 50}px`,
                      animationDuration: `${10 + i * 5}s`,
                    }}
                    className="absolute border border-sunrise/10 rounded-full animate-orbit"
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full animate-pulse-glow"
                      style={{ animationDuration: "2s" }}
                    />
                  </div>
                ))}

                <div className="relative z-10">
                  <Globe className="text-sunrise w-28 h-28 animate-[spin_30s_linear_infinite]" />
                  <div
                    className="absolute -inset-4 rounded-full -z-10 animate-breathe"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
                      animationDuration: "2s",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
