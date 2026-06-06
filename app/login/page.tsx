import { LoginForm } from "@/components/auth/LoginForm";
import { JadeoMark } from "@/components/brand/JadeoMark";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-terminal lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[620px] border-b border-white/10 bg-[radial-gradient(circle_at_25%_15%,rgba(54,244,139,0.16),transparent_24%),linear-gradient(145deg,rgba(16,28,24,0.92),rgba(5,8,7,0.96))] p-10 lg:border-b-0 lg:border-r">
          <JadeoMark />
          <div className="mt-24 max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-jadeo-green">
              Mission Control
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-white">
              Jadeo Mission Control
            </h1>
            <p className="mt-4 text-xl text-white/78">
              The AI Mindshare Infrastructure for Global Brands
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-jadeo-muted">
              Build, Protect and Expand Your AI Cognitive Assets.
            </p>
          </div>
          <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-3">
            {["Mindshare", "Evidence", "Assets"].map((label) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs uppercase text-jadeo-muted">{label}</p>
                <div className="mt-4 h-1 rounded-full bg-jadeo-green/70" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-[#080D0B]/90 p-10">
          <div className="w-full">
            <p className="text-sm uppercase tracking-[0.28em] text-jadeo-green">
              Client Terminal
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Secure Access</h2>
            <p className="mt-3 text-sm leading-6 text-jadeo-muted">
              Demo client workspace for AI cognitive asset visibility.
            </p>
            <div className="mt-10">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
