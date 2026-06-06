"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("client@hisense.com");
  const [password, setPassword] = useState("jadeo2026");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    setLoading(false);

    if (!response.ok) {
      setError("账号或密码不正确");
      return;
    }

    router.push("/situation-room");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm text-jadeo-muted">Email</span>
        <span className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus-within:border-jadeo-green/60">
          <Mail className="h-4 w-4 text-jadeo-green" />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-jadeo-muted"
            placeholder="client@hisense.com"
            type="email"
          />
        </span>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-jadeo-muted">Password</span>
        <span className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus-within:border-jadeo-green/60">
          <LockKeyhole className="h-4 w-4 text-jadeo-green" />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-jadeo-muted"
            placeholder="jadeo2026"
            type="password"
          />
        </span>
      </label>
      {error && <p className="text-sm text-jadeo-risk">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-jadeo-green px-4 py-3 text-sm font-semibold text-black shadow-glow transition hover:bg-jadeo-green2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Entering..." : "Enter Mission Control"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
