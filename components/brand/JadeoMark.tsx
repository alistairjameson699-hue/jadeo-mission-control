export function JadeoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-9">
        <span className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 border-b-2 border-l-2 border-white" />
        <span className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-white" />
      </div>
      {!compact && <span className="text-2xl font-semibold text-white">Jadeo</span>}
    </div>
  );
}
