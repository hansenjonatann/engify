"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

export function InteractiveQuiz() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const options = [
    { id: 1, text: "I is going to the store.", correct: false },
    { id: 2, text: "I am going to the store.", correct: true },
    { id: 3, text: "I are going to the store.", correct: false },
  ];

  return (
    <div className="bg-background border-2 border-stone-200 dark:border-stone-800 p-8 md:p-12 mt-16 rounded-sm shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent-500"></div>
      
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 dark:bg-stone-900 text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 rounded-sm">
          Knowledge Check
        </div>
        <h3 className="text-2xl font-black tracking-tight mb-2">Identify the correct structure.</h3>
        <p className="text-stone-600 dark:text-stone-400 font-medium">Which sentence is grammatically correct?</p>
      </div>

      <div className="space-y-4">
        {options.map((opt) => (
          <button
            key={opt.id}
            disabled={submitted}
            onClick={() => setSelected(opt.id)}
            className={`w-full text-left px-6 py-5 rounded-sm border-2 transition-all flex justify-between items-center ${
              submitted && opt.correct
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-400"
                : submitted && selected === opt.id && !opt.correct
                ? "border-red-500 bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-400"
                : selected === opt.id
                ? "border-accent-500 bg-accent-50/50 dark:bg-accent-950/20"
                : "border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 bg-white dark:bg-stone-900"
            }`}
          >
            <span className={`font-bold ${submitted && opt.correct ? 'text-emerald-700 dark:text-emerald-400' : ''}`}>
              {opt.text}
            </span>
            {submitted && opt.correct && <div className="bg-emerald-500 text-white rounded-full p-1"><Check size={16} /></div>}
            {submitted && selected === opt.id && !opt.correct && <div className="bg-red-500 text-white rounded-full p-1"><X size={16} /></div>}
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={selected === null}
            className="px-8 py-4 font-bold text-sm uppercase tracking-widest bg-primary-900 text-white dark:bg-white dark:text-primary-900 hover:bg-accent-500 dark:hover:bg-accent-500 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-sm shadow-md"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={() => {
              setSubmitted(false);
              setSelected(null);
            }}
            className="px-8 py-4 font-bold text-sm uppercase tracking-widest border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all rounded-sm"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
