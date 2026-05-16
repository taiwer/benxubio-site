import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, User, Building, Mail, Phone, FileText } from "lucide-react";

export const RequestModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-[100]"
          />
          <div
            className="fixed inset-0 flex items-center justify-center p-4 z-[101] cursor-pointer"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-primary/95 border border-sunrise/30 rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative overflow-hidden cursor-default"
            >
              {/* Background Glow */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-sunrise/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors z-[102] cursor-pointer"
              >
                <X size={24} />
              </button>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-20 h-20 bg-sunrise/20 rounded-full flex items-center justify-center mb-6">
                    <Send size={40} className="text-sunrise" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    提交成功！
                  </h3>
                  <p className="text-slate-600 text-lg">
                    我们的科研顾问将在24小时内与您联系。
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8 relative z-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      项目需求对接
                    </h2>
                    <p className="text-slate-600">
                      填写您的科研需求，我们的数据科学家和实验专家将快速响应。
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          您的姓名
                        </label>
                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="text"
                            placeholder="如: 陈博士"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sunrise/50 focus:border-sunrise/50 transition-all text-slate-900"
                          />
                        </div>
                      </div>

                      {/* Organization */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          所在单位/科研机构
                        </label>
                        <div className="relative">
                          <Building
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="text"
                            placeholder="如: 某高校生命科学学院"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sunrise/50 focus:border-sunrise/50 transition-all text-slate-900"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          联系电话
                        </label>
                        <div className="relative">
                          <Phone
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="tel"
                            placeholder="您的手机号或座机"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sunrise/50 focus:border-sunrise/50 transition-all text-slate-900"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          电子邮箱
                        </label>
                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="email"
                            placeholder="your@email.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sunrise/50 focus:border-sunrise/50 transition-all text-slate-900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        需求分类 (可多选)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          "生信分析",
                          "多组学研究",
                          "细胞实验",
                          "酶制剂/材料",
                          "工具定制开发",
                          "硬件进出口",
                          "医学项目评估",
                          "其他",
                        ].map((cat) => (
                          <label
                            key={cat}
                            className="flex items-center gap-2 cursor-pointer p-3 border border-slate-200 rounded-xl hover:bg-sunrise/5 transition-colors"
                          >
                            <input
                              type="checkbox"
                              className="min-w-4 w-4 h-4 text-sunrise border-slate-300 rounded focus:ring-sunrise"
                            />
                            <span className="text-sm text-slate-700 whitespace-nowrap">
                              {cat}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        项目需求简述
                      </label>
                      <div className="relative">
                        <FileText
                          size={18}
                          className="absolute left-3 top-3 text-slate-400"
                        />
                        <textarea
                          required
                          rows={4}
                          placeholder="请简要描述您的项目背景、数据规模、预期目标或碰到的分析瓶颈..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sunrise/50 focus:border-sunrise/50 transition-all text-slate-900 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-sunrise text-primary font-bold text-lg hover:bg-slate-50 hover:text-sunrise border border-transparent hover:border-sunrise transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "正在提交..."
                      ) : (
                        <>
                          <Send size={20} />
                          提交需求
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
