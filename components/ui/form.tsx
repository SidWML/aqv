"use client";

import { useId, useState } from "react";
import { Button, cx } from "./kit";

/* ── input ────────────────────────────────────────────────────────────
   §51. Cream surface, 1px warm border, 12px radius, gold focus ring.
   Real labels — no floating-label gimmicks.
──────────────────────────────────────────────────────────────────── */

export function Field({
  label,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cx("flex flex-col gap-2", className)}>
      <span className="text-[14px] font-medium text-ink">{label}</span>
      {children}
      {error ? (
        <span className="text-[13px] text-rose">{error}</span>
      ) : hint ? (
        <span className="text-[13px] text-muted">{hint}</span>
      ) : null}
    </label>
  );
}

const inputCls =
  "h-[50px] w-full rounded-md border border-border bg-paper px-4 text-[15px] text-ink " +
  "placeholder:text-faint transition-colors duration-200 " +
  "focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cx(inputCls, props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cx(inputCls, "pr-10", props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cx(inputCls, "h-auto min-h-[132px] py-3.5", props.className)}
    />
  );
}

/* ── newsletter ───────────────────────────────────────────────────────
   §50. One field, one button, no marketing banner.

   There is no submission endpoint yet, so rather than posting into a
   void the form composes a mail to the programme address — an action
   that actually completes. Swap `onSubmit` for a POST when the intake
   API exists.
──────────────────────────────────────────────────────────────────── */

export function Newsletter({
  email,
  placeholder = "Your email",
  label = "Subscribe",
  subject = "AQV milestone alerts — subscribe",
  /** stack the field above the button, for narrow panels */
  stacked,
  /** an ink button instead of gold, where the panel is already warm */
  dark,
}: {
  email: string;
  placeholder?: string;
  label?: string;
  subject?: string;
  stacked?: boolean;
  dark?: boolean;
}) {
  const id = useId();
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!value) return;
        const url = new URL(`mailto:${email}`);
        url.searchParams.set("subject", subject);
        url.searchParams.set("body", `Please register ${value}.`);
        window.location.href = url.toString();
        setSent(true);
      }}
      className={cx("flex w-full gap-3", stacked ? "flex-col" : "flex-col sm:flex-row")}
    >
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <Input
        id={id}
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={stacked ? undefined : "sm:flex-1"}
      />
      <Button
        type="submit"
        className={cx(
          "shrink-0",
          stacked && "t-nav w-full",
          dark && "bg-olive-deep text-cream hover:bg-[#4e5828]",
        )}
      >
        {label}
      </Button>
      <p aria-live="polite" className="sr-only">
        {sent ? "Opening your mail application to complete the request." : ""}
      </p>
    </form>
  );
}
