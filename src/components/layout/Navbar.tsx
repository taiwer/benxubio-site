import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Page } from "../../types";

export const NavLink = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`text-sm font-medium tracking-widest transition-all relative py-2 ${active ? "text-sunrise transition-colors" : "text-slate-700 hover:text-sunrise"}`}
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

export const MobileNavLink = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`block w-full text-left text-lg font-medium transition-colors ${active ? "text-accent" : "text-slate-700"}`}
  >
    {children}
  </button>
);

export const Navbar = ({
  currentPage,
  setPage,
  onRequestStart,
}: {
  currentPage: Page;
  setPage: (p: Page) => void;
  onRequestStart?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex justify-between h-24 items-center">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setPage("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-accent to-sunrise rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-black font-bold text-xl font-serif italic">
                B
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                本旭生物
              </span>
              <span className="text-[10px] text-sunrise uppercase tracking-[0.2em] leading-none font-light">
                Benxu Biotech
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <NavLink
              active={currentPage === "home"}
              onClick={() => setPage("home")}
            >
              首页
            </NavLink>
            <NavLink
              active={currentPage === "services"}
              onClick={() => setPage("services")}
            >
              技术服务
            </NavLink>
            <NavLink
              active={currentPage === "about"}
              onClick={() => setPage("about")}
            >
              关于我们
            </NavLink>
            <button
              onClick={onRequestStart}
              className="px-6 py-2 bg-transparent border border-sunrise text-sunrise text-sm rounded-full hover:bg-sunrise hover:text-black transition-all duration-300 font-bold glow-border-sunrise"
            >
              提交项目需求
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent p-2"
            >
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
            className="md:hidden bg-primary border-b border-slate-200 px-6 py-8 space-y-6"
          >
            <MobileNavLink
              active={currentPage === "home"}
              onClick={() => {
                setPage("home");
                setIsOpen(false);
              }}
            >
              首页
            </MobileNavLink>
            <MobileNavLink
              active={currentPage === "services"}
              onClick={() => {
                setPage("services");
                setIsOpen(false);
              }}
            >
              技术服务
            </MobileNavLink>
            <MobileNavLink
              active={currentPage === "about"}
              onClick={() => {
                setPage("about");
                setIsOpen(false);
              }}
            >
              关于我们
            </MobileNavLink>
            <button
              onClick={() => {
                onRequestStart?.();
                setIsOpen(false);
              }}
              className="w-full bg-accent text-primary px-5 py-4 rounded-xl font-bold"
            >
              提交项目需求
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
