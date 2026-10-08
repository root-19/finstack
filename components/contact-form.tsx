"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-2 block w-full rounded-lg border-0 bg-white px-3.5 py-2.5 text-neutral-900 shadow-sm ring-1 ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-brand-500 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-neutral-200 p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-500" />
        <h3 className="mt-4 text-xl font-semibold text-neutral-900">Thanks, we got your message</h3>
        <p className="mt-2 text-neutral-600">Someone from our team will get back to you within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-neutral-900">
          Full name
          <input name="name" required maxLength={100} autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-neutral-900">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-neutral-900">
          Company
          <input name="company" maxLength={100} autoComplete="organization" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-neutral-900">
          Service needed
          <select name="topic" className={inputClass} defaultValue="Web App Development">
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-neutral-900 sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            maxLength={2000}
            placeholder="Tell us about your business, what you need built and your timeline."
            className={inputClass}
          />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
