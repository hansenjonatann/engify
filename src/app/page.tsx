'use client'
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Blocks, Volume2, BookMarked, Sparkles, Users, Zap, Clock } from "lucide-react";
import Head from "next/head";
import { motion, Variants } from "framer-motion"; // Imported Variants to fix the IDE error
import { useEffect, useState } from "react"; // Imported for safe client-side hydration

export default function Home() {
  // Fixes hydration mismatch warning for dynamic dates in Next.js
  const [currentYear, setCurrentYear] = useState<number | string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Explicitly typing variants removes the TypeScript error on the component props
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-stone-50 dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 font-sans text-stone-900 dark:text-stone-100">

      {/* Navbar */}
      <motion.nav 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        className="sticky top-0 z-50 w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 shadow-sm"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-2 text-2xl font-bold text-amber-700 dark:text-amber-300">
            <BookOpen size={24} />
            Engify
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" aria-label="Log in" className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-300 transition-colors hidden sm:inline">
              Log in
            </Link>
            <Link href="/dashboard" aria-label="Start Learning" className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="pt-24 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-full text-xs font-medium text-amber-800 dark:text-amber-200 mb-6 shadow">
            <Sparkles size={14} />
            Focused learning, no fluff
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Master English Through Immersion, Not Memorization
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto md:mx-0 mb-10">
            A clean, distraction-free workspace where you read curated curricula, listen to natural audio, and grow your vocabulary effortlessly.
          </p>
          <Link href="/dashboard" aria-label="Open Workspace" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition-transform hover:scale-105 shadow-md">
            Open Workspace <ArrowRight size={18} />
          </Link>
        </div>
        <div className="flex-1 w-full max-w-md">
          <Image src="/hero_illustration.png" alt="Studying English" width={500} height={300} className="mx-auto" />
        </div>
      </motion.section>

      {/* Wave Divider */}
      <div className="relative overflow-hidden">
        <svg viewBox="0 0 1440 80" className="w-full text-stone-50 dark:text-stone-900" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,40L60,45C120,50,240,60,360,58C480,56,600,42,720,37C840,32,960,36,1080,42C1200,48,1320,54,1380,57L1440,60V80H0Z" />
        </svg>
      </div>

      {/* Stats Section */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <div>
            <p className="text-4xl font-bold text-amber-600">10K+</p>
            <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mt-1">Learners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-amber-600">4.8/5</p>
            <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mt-1">Avg Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-amber-600">50+</p>
            <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mt-1">Modules</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-amber-600">24/7</p>
            <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mt-1">Support</p>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits Section */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-16 bg-stone-100 dark:bg-stone-800">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 px-6">
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-stone-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Sparkles size={32} className="text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-stone-800 dark:text-stone-200">Focused Learning</h3>
            <p className="text-sm text-stone-600 dark:text-stone-300">Distraction-free UI that keeps you on track.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-stone-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users size={32} className="text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-stone-800 dark:text-stone-200">Community Support</h3>
            <p className="text-sm text-stone-600 dark:text-stone-300">Join fellow learners and share progress.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-stone-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Zap size={32} className="text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-stone-800 dark:text-stone-200">Instant Feedback</h3>
            <p className="text-sm text-stone-600 dark:text-stone-300">Get real-time corrections while you read.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-stone-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Clock size={32} className="text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-stone-800 dark:text-stone-200">Flexible Schedule</h3>
            <p className="text-sm text-stone-600 dark:text-stone-300">Learn anytime, anywhere at your own pace.</p>
          </div>
        </div>
      </motion.section>

      {/* Feature Grid */}
      <section className="py-16 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Everything You Need to Succeed</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Blocks size={24} className="text-amber-600" />
                <h3 className="text-xl font-semibold">Structured Path</h3>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-sm">
                CEFR-aligned curriculum that guides you from A1 to C2, step by step.
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Volume2 size={24} className="text-amber-600" />
                <h3 className="text-xl font-semibold">Native Audio</h3>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-sm">
                Highlight any sentence to hear it spoken with natural intonation.
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <BookMarked size={24} className="text-amber-600" />
                <h3 className="text-xl font-semibold">Smart Bank</h3>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-sm">
                Save words instantly; we capture surrounding context automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 bg-white dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Learners Say</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <blockquote className="p-6 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm">
              <p className="italic text-stone-800 dark:text-stone-200 mb-4">
                &ldquo;Engify turned my chaotic study routine into a focused, enjoyable habit. The audio feature feels like a native speaker is right beside me.&rdquo;
              </p>
              <footer className="text-right text-sm font-medium text-amber-700 dark:text-amber-300">
                &ndash; Maya, B2 learner
              </footer>
            </blockquote>
            <blockquote className="p-6 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm">
              <p className="italic text-stone-800 dark:text-stone-200 mb-4">
                &ldquo;The smart vocabulary bank saves me time. I never lose a new word again.&rdquo;
              </p>
              <footer className="text-right text-sm font-medium text-amber-700 dark:text-amber-300">
                &ndash; Alex, C1 learner
              </footer>
            </blockquote>
          </div>
        </div>
      </motion.section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <details className="group mb-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800">
            <summary className="flex cursor-pointer items-center justify-between p-4 text-stone-800 dark:text-stone-200">
              How does the curriculum progress?
              <ArrowRight className="transform transition-transform group-open:rotate-90" size={16} />
            </summary>
            <p className="p-4 pt-0 text-stone-600 dark:text-stone-400">
              The curriculum follows the CEFR framework. After completing a lesson you unlock the next one automatically, ensuring a smooth learning curve.
            </p>
          </details>
          <details className="group mb-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800">
            <summary className="flex cursor-pointer items-center justify-between p-4 text-stone-800 dark:text-stone-200">
              Is there a free tier?
              <ArrowRight className="transform transition-transform group-open:rotate-90" size={16} />
            </summary>
            <p className="p-4 pt-0 text-stone-600 dark:text-stone-400">
              Yes! The introductory A1-A2 curriculum is completely free. Higher levels are available via a modest subscription.
            </p>
          </details>
          <details className="group mb-4 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800">
            <summary className="flex cursor-pointer items-center justify-between p-4 text-stone-800 dark:text-stone-200">
              Do I need to install anything?
              <ArrowRight className="transform transition-transform group-open:rotate-90" size={16} />
            </summary>
            <p className="p-4 pt-0 text-stone-600 dark:text-stone-400">
              No downloads needed. Engify runs entirely in your browser on any device.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-24 bg-amber-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Focus?</h2>
        <p className="mb-8 max-w-xl mx-auto text-amber-100">
          Join the workspace and start your English journey with a clean, distraction-free environment.
        </p>
        <Link href="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-700 rounded-xl hover:bg-stone-100 transition-colors font-semibold shadow-md">
          Start Learning Now <ArrowRight size={18} />
        </Link>
      </motion.section>

      {/* Footer */}
      <motion.footer variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-6 text-center border-t border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400">
        <p>&copy; {currentYear} Engify. Crafted for focused learning.</p>
      </motion.footer>

    </main>
  );
}