"use client";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";
import { askAI } from "@/lib/api";
type Message = { role: "user" | "ai"; text: string };
const suggestions = [
  "Tell me about her strongest project",
  "What backend technologies does she know?",
  "What is her educational background?",
];
export default function AskAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const send = async (value?: string) => {
    const q = (value ?? question).trim();
    if (!q || loading) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setQuestion("");
    setLoading(true);
    try {
      const answer = await askAI(q);
      setMessages((m) => [...m, { role: "ai", text: answer }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text:
            e instanceof Error
              ? e.message
              : "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    send();
  };
  return (
    <motion.section
      id="ask-ai"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="section section-tint"
    >
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="eyebrow">Recruiter assistant</p>
          <h2 className="section-title mt-4">Ask AI about Shraddha.</h2>
          <p className="mt-5 leading-7 text-ink/65 dark:text-white/65">
            A quick way to learn about her skills, projects, and
            experience—without hunting through a résumé.
          </p>
          <div className="mt-7 space-y-2">
            {suggestions.map((x) => (
              <button onClick={() => send(x)} key={x} className="suggestion">
                <Sparkles size={14} />
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="card flex min-h-[420px] flex-col p-0 overflow-hidden">
          <div className="flex items-center gap-3 border-b border-ink/10 px-5 py-4 dark:border-white/10">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-moss text-lime">
              <Bot size={18} />
            </span>
            <div>
              <p className="font-semibold text-ink dark:text-white">
                Ask AI about Shraddha
              </p>
              <p className="text-xs text-ink/50 dark:text-white/50">
                Portfolio assistant
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.length === 0 && (
              <div className="mt-16 text-center text-sm text-ink/50 dark:text-white/50">
                Ask a question to start the conversation.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="bubble ai animate-pulse">Thinking…</div>
            )}
          </div>
          <form
            onSubmit={submit}
            className="flex gap-2 border-t border-ink/10 p-3 dark:border-white/10"
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question…"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            />
            <button
              aria-label="Send question"
              disabled={loading}
              className="grid h-10 w-10 place-items-center rounded-xl bg-moss text-lime disabled:opacity-50"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
