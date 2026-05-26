"use client";

import { useState, useEffect, useCallback } from "react";

export function useTextSelection() {
  const [selectedText, setSelectedText] = useState("");
  const [contextSentence, setContextSentence] = useState("");

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }

    const text = selection.toString().trim();
    if (!text) return;

    setSelectedText(text);

    const anchorNode = selection.anchorNode;
    if (anchorNode && anchorNode.textContent) {
      const fullText = anchorNode.textContent;
      const sentences = fullText.match(/[^.!?]+[.!?]+/g) || [fullText];
      const sentence = sentences.find(s => s.includes(text)) || fullText;
      
      setContextSentence(sentence.trim());
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleSelection);
    return () => document.removeEventListener("mouseup", handleSelection);
  }, [handleSelection]);

  const clearSelection = useCallback(() => {
    setSelectedText("");
    setContextSentence("");
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
  }, []);

  return { selectedText, contextSentence, clearSelection };
}
