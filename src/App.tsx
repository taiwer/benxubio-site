import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { RequestModal } from "./components/RequestModal";
import { Page } from "./types";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden selection:bg-accent selection:text-primary">
      <Navbar
        currentPage={page}
        setPage={setPage}
        onRequestStart={() => setIsModalOpen(true)}
      />

      <main>
        <AnimatePresence mode="wait">
          {page === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage
                setPage={setPage}
                onRequestStart={() => setIsModalOpen(true)}
              />
            </motion.div>
          )}
          {page === "services" && (
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
          {page === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage onRequestStart={() => setIsModalOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
