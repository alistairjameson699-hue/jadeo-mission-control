export function SectionCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`terminal-card rounded-xl p-5 ${className}`}>{children}</section>;
}
